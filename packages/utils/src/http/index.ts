type ParameterValue = boolean | number | string;

// Finds the parameter name inside a single segment, in either the `:name` or `{name}` form.
type SingleParameterToken<Token extends string> = Token extends `:${infer Name}`
  ? Name
  : Token extends `{${infer Name}}`
    ? Name
    : never;

// Recursive helper for finding path parameters in the absence of wildcards.
// In: '/users/:userId/posts/:postId'
// Out: 'userId' | 'postId'
type PathTokens<Path extends string> = Path extends `${infer Segment}/${infer Rest}`
  ? PathTokens<Rest> | SingleParameterToken<Segment>
  : SingleParameterToken<Path>;

// Recursive helper for finding parameters inside a single `key=value` query pair.
// In: 'query=:term'
// Out: 'term'
type PairTokens<Pair extends string> = Pair extends `${infer Key}=${infer Value}`
  ? SingleParameterToken<Key> | SingleParameterToken<Value>
  : never;

// Recursive helper for finding parameters inside a query string.
// In: 'query=:term&page=:page'
// Out: 'term' | 'page'
type QueryTokens<Query extends string> = Query extends `${infer Pair}&${infer Rest}`
  ? PairTokens<Pair> | QueryTokens<Rest>
  : PairTokens<Query>;

// A `?` marks a parameter as optional when it is followed by the end of the path, a `/`, or the
// closing brace of a `{name?}` parameter. Any other `?` begins a query string instead.
type QueryStartsAt<Rest extends string> = Rest extends '' | `/${string}` | `}${string}` ? false : true;

// The path portion of a template. Optional markers are preserved so `:postId?` keeps being
// treated as optional.
type StripQuery<Path extends string> = Path extends `${infer Base}?${infer Rest}`
  ? QueryStartsAt<Rest> extends true
    ? Base
    : `${Base}?${StripQuery<Rest>}`
  : Path;

// The query portion of a template.
type ExtractQuery<Path extends string> = Path extends `${string}?${infer Rest}`
  ? QueryStartsAt<Rest> extends true
    ? Rest
    : ExtractQuery<Rest>
  : '';

// The parameters that apply to a template, drawn from both the path and the query string.
type ResolvedTokens<Path extends string> = PathTokens<StripQuery<Path>> | QueryTokens<ExtractQuery<Path>>;

// A trailing `?` marks a parameter as optional and is not part of its name
type OptionalParameterName<Token extends string> = Token extends `${infer Name}?` ? Name : never;
// A required parameter does not have a trailing `?` in its token
type RequiredParameterName<Token extends string> = Token extends `${string}?` ? never : Token;

//Extracts the path parameters from a given path and separates them into optional and required parameters.
type PathParameters<Path extends string> = Partial<
  Record<OptionalParameterName<ResolvedTokens<Path>>, ParameterValue>
> &
  Record<RequiredParameterName<ResolvedTokens<Path>>, ParameterValue>;

type Protocols = 'http' | 'https';
// The parameters argument is only mandatory if the path contains required parameters. If the path only contains optional parameters, the parameters argument can be omitted.
type GeneratePathArguments<Path extends string> = [RequiredParameterName<ResolvedTokens<Path>>] extends [never]
  ? [parameters?: PathParameters<Path>, baseUrl?: string, protocol?: Protocols]
  : [parameters: PathParameters<Path>, baseUrl?: string, protocol?: Protocols];

const hasHttpPrefix = (value: string) => /^https?:\/\//i.test(value);

// A segment is a parameter when the entire segment is `:name`, `:name?`, `{name}` or `{name?}`.
const segmentParameter = (segment: string) => /^:([\w.-]+)(\??)$/.exec(segment) ?? /^\{([\w.-]+)(\??)\}$/.exec(segment);

// A parameter embedded in a larger string, such as a query value. Only matched at the start of a
// pair or after a separator so that literal colons such as `12:30` are left untouched. The name is
// always captured first so the `:name?` and `{name?}` forms share a single capture signature.
const inlineParameter = /(?<![^\s=?&/])(?:[:{])([\w.-]+)(\?)?\}?/g;

// A parameter still present after substitution means the template could not be resolved.
const unresolvedParameter = /(?:^|[/?&=])[:{][\w.-]+/;

/**
 * Resolves a single parameter to its encoded value, returning `undefined` when an optional
 * parameter has no value so the caller can drop it.
 */
const resolveParameter = (
  key: string,
  optionalMarker: string | undefined,
  values: Record<string, ParameterValue | undefined>,
  path: string,
): string | undefined => {
  const value = values[key];

  // No usable value means the segment is dropped when optional, and is a caller error when required
  if (value === undefined || value === '') {
    if (optionalMarker !== '?') {
      throw new Error(`Missing required path parameter "${key}" for path "${path}"`);
    }
    return;
  }
  return encodeURIComponent(String(value));
};

/**
 * Finds the `?` that starts a query string, skipping the `?` used to mark optional parameters.
 * Returns -1 when the path carries no query string.
 */
const findQueryStart = (path: string) => {
  for (let index = path.indexOf('?'); index !== -1; index = path.indexOf('?', index + 1)) {
    const next = path[index + 1];
    if (next !== undefined && next !== '/' && next !== '}') {
      return index;
    }
  }
  return -1;
};

/**
 * Substitutes every parameter in the path portion, dropping segments whose optional parameter has
 * no value.
 */
const substitutePathSegments = (template: string, values: Record<string, ParameterValue | undefined>, path: string) =>
  template
    .split(/\/+/)
    .map((segment) => {
      const keyMatch = segmentParameter(segment);
      if (keyMatch) {
        const [, key = '', optionalMarker] = keyMatch;
        return resolveParameter(key, optionalMarker, values, path);
      }
      return segment.replaceAll(/\?$/g, ''); // Remove any optional markers from optional static segments
    })
    // Remove empty segments
    .filter((segment): segment is string => segment !== undefined && segment !== '');

/**
 * Substitutes every parameter in the query string and returns the surviving pairs. A pair is
 * dropped when one of its parameters is optional and has no value.
 */
const substituteQueryPairs = (template: string, values: Record<string, ParameterValue | undefined>, path: string) => {
  const pairs: Array<string> = [];

  for (const pair of template.split('&')) {
    let hasMissingOptional = false;

    const resolved = pair.replaceAll(
      inlineParameter,
      (_match: string, key: string, optionalMarker: string | undefined) => {
        const value = resolveParameter(key, optionalMarker, values, path);

        if (value === undefined) {
          // Drop the whole pair rather than leaving a dangling `key=`
          hasMissingOptional = true;
          return '';
        }
        return value;
      },
    );

    if (pair !== '' && !hasMissingOptional) {
      pairs.push(resolved);
    }
  }

  return pairs;
};

/**
 * Guards against a template that could not be fully resolved, such as `:user:id`, which would
 * otherwise leak the raw placeholder into the generated path.
 */
const assertNoUnresolvedParameters = (parts: Array<string>, path: string) => {
  const unresolved = parts.find((part) => unresolvedParameter.test(part));
  if (unresolved !== undefined) {
    throw new Error(`Unresolved parameter "${unresolved}" in path "${path}"`);
  }
};

/**
 * Builds a URL path from a template, substituting `:name`, `{name}` and their optional `?`
 * variants. Parameters are encoded, optional parameters without a value are removed, and a query
 * string on the template is preserved and may itself contain parameters.
 *
 * @param path The path template, such as `/users/:userId/posts/:postId?query=:term`
 * @param parameters An object containing the values for the parameters in the template
 * @param baseUrl An optional base URL to prepend to the generated path, such as `api.example.com`
 * @param protocol The protocol to use when prepending a base URL, either `http` or `https`. Defaults to `https`.
 * @returns The generated path with all parameters substituted and encoded
 */
export const generatePath = <Path extends string>(path: Path, ...rest: GeneratePathArguments<Path>) => {
  const [parameters, baseUrl, protocol = 'https'] = rest;

  const hasBaseUrl = !!baseUrl;

  const values: Record<string, ParameterValue | undefined> = parameters ?? {};

  const queryStart = findQueryStart(path);
  const pathTemplate = queryStart === -1 ? path : path.slice(0, queryStart);
  const queryTemplate = queryStart === -1 ? '' : path.slice(queryStart + 1);

  const segments = substitutePathSegments(pathTemplate, values, path);
  const queryPairs = substituteQueryPairs(queryTemplate, values, path);

  assertNoUnresolvedParameters([...segments, ...queryPairs], path);

  const query = queryPairs.length > 0 ? `?${queryPairs.join('&')}` : '';

  // The slash is what separates the base URL from the path, so it is only emitted when there is
  // something to separate. Otherwise a root path would produce a trailing slash.
  const shouldPrefix = segments.length > 0 && (hasBaseUrl || path.startsWith('/'));
  const resolved = (shouldPrefix ? '/' : '') + segments.join('/') + query;

  if (hasBaseUrl) {
    // A trailing slash on the base URL only ever exists to separate it from the path.
    const resolvedBaseUrl = (hasHttpPrefix(baseUrl) ? baseUrl : `${protocol}://${baseUrl}`).replace(/\/$/, '');

    return resolvedBaseUrl + resolved;
  }

  return resolved;
};
