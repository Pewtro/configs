type ParameterValue = boolean | number | string;

// Recursive helper for finding path parameters in the absence of wildcards.
// In: '/users/:userId/posts/:postId'
// Out: { userId: string, postId: string }
type PathParameterToken<Path extends string> =
  // split paht into individual segements
  Path extends `${infer L}/${infer R}`
    ? PathParameterToken<L> | PathParameterToken<R>
    : // find params after `:`
      Path extends `:${infer Token}`
      ? Token
      : // find params inside `{}` braces
        Path extends `{${infer Token}}`
        ? Token // otherwise, there aren't any params present
        : never;

// A trailing `?` marks a parameter as optional and is not part of its name
type OptionalParameterName<Token extends string> = Token extends `${infer Name}?` ? Name : never;
// A required parameter does not have a trailing `?` in its token
type RequiredParameterName<Token extends string> = Token extends `${string}?` ? never : Token;

//Extracts the path parameters from a given path and separates them into optional and required parameters.
type PathParameters<Path extends string> = Partial<
  Record<OptionalParameterName<PathParameterToken<Path>>, ParameterValue>
> &
  Record<RequiredParameterName<PathParameterToken<Path>>, ParameterValue>;

type Protocols = 'http' | 'https';
// The parameters argument is only mandatory if the path contains required parameters. If the path only contains optional parameters, the parameters argument can be omitted.
type GeneratePathArguments<Path extends string> = [RequiredParameterName<PathParameterToken<Path>>] extends [never]
  ? [parameters?: PathParameters<Path>, baseUrl?: string, protocol?: Protocols]
  : [parameters: PathParameters<Path>, baseUrl?: string, protocol?: Protocols];

const hasHttpPrefix = (value: string) => /^https?:\/\//i.test(value);

export const generatePath = <Path extends string>(path: Path, ...rest: GeneratePathArguments<Path>) => {
  const [parameters, baseUrl, protocol = 'https'] = rest;

  //Ensure the "/" prefix is present if the path starts with a "/" and the baseUrl does not end with a "/"
  const shouldPrefixDueToPath = path.startsWith('/') && !baseUrl?.endsWith('/');
  //Ensure the "/" prefix is present if the baseUrl does not end with a "/"
  const shouldPrefixDueToBaseUrl = !!baseUrl && !baseUrl.endsWith('/');
  const shouldPrefix = shouldPrefixDueToPath || shouldPrefixDueToBaseUrl;
  const prefix = shouldPrefix ? '/' : '';

  const values: Record<string, ParameterValue | undefined> = parameters ?? {};

  const segments = path
    .split(/\/+/)
    .map((segment) => {
      const keyMatch = /^:([\w.-]+)(\??)$/.exec(segment) ?? /^\{([\w.-]+)(\??)\}$/.exec(segment);
      if (keyMatch) {
        const [, key = '', optionalMarker] = keyMatch;
        const value = values[key];

        // No usable value means the segment is dropped when optional, and is a caller error when required
        if (value === undefined || value === '') {
          if (optionalMarker === '?') {
            return;
          }
          throw new Error(`Missing required path parameter "${key}" for path "${path}"`);
        }
        return encodeURIComponent(String(value));
      }
      return segment.replaceAll(/\?$/g, ''); // Remove any optional markers from optional static segments
    })
    // Remove empty segments
    .filter((segment): segment is string => segment !== undefined && segment !== '');

  if (baseUrl) {
    const resolvedBaseUrl = hasHttpPrefix(baseUrl) ? baseUrl : `${protocol}://${baseUrl}`;

    return resolvedBaseUrl + prefix + segments.join('/');
  }

  return prefix + segments.join('/');
};
