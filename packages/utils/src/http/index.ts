// Recursive helper for finding path parameters in the absence of wildcards.
// In: '/users/:userId/posts/:postId'
// Out: { userId: string, postId: string }
type OptionalPathParameter<Path extends string> = Path extends `${infer L}/${infer R}`
  ? OptionalPathParameter<L> | OptionalPathParameter<R>
  : Path extends `:${infer Parameter}`
    ? Parameter extends `${string}?`
      ? ParameterName<Parameter>
      : never
    : Path extends `{${infer Parameter}}`
      ? Parameter extends `${string}?`
        ? ParameterName<Parameter>
        : never
      : never;

type ParameterName<Parameter extends string> = Parameter extends `${infer Name}?` ? Name : Parameter;

type ParametersForPath<Path extends string> = Partial<Record<OptionalPathParameter<Path>, string>> &
  Record<RequiredPathParameter<Path>, string>;

type PathParameter<Path extends string> = OptionalPathParameter<Path> | RequiredPathParameter<Path>;

type RequiredPathParameter<Path extends string> = Path extends `${infer L}/${infer R}`
  ? RequiredPathParameter<L> | RequiredPathParameter<R>
  : Path extends `:${infer Parameter}`
    ? Parameter extends `${string}?`
      ? never
      : ParameterName<Parameter>
    : Path extends `{${infer Parameter}}`
      ? Parameter extends `${string}?`
        ? never
        : ParameterName<Parameter>
      : never;

export const generatePath = <Path extends string>(
  path: Path,
  parameters: ParametersForPath<Path>,
  baseUrl?: string,
) => {
  //Ensure the "/" prefix is present if the path starts with a "/" and the baseUrl does not end with a "/"
  const shouldPrefixDueToPath = path.startsWith('/') && !baseUrl?.endsWith('/');
  //Ensure the "/" prefix is present if the baseUrl does not end with a "/"
  const shouldPrefixDueToBaseUrl = !!baseUrl && !baseUrl.endsWith('/');
  const shouldPrefix = shouldPrefixDueToPath || shouldPrefixDueToBaseUrl;
  const prefix = shouldPrefix ? '/' : '';

  const isPathParameter = (segment?: string): segment is PathParameter<Path> =>
    path.includes(`:${segment}`) ||
    path.includes(`:${segment}?`) ||
    path.includes(`{${segment}}`) ||
    path.includes(`{${segment}?}`);

  const segments = path
    .split(/\/+/)
    .map((segment) => {
      const keyMatch = /^:([A-Za-z0-9_.-]+)(\??)$/.exec(segment) ?? /^\{([A-Za-z0-9_.-]+)(\??)\}$/.exec(segment);
      if (keyMatch) {
        const [, key] = keyMatch;
        if (isPathParameter(key)) {
          const parameterValue = parameters[key];
          if (parameterValue === undefined) {
            return '';
          }
          return parameterValue;
        }
      }
      // Remove any optional markers from optional static segments
      return segment.replaceAll(/\?$/g, '');
    })
    //Remove empty segments
    .filter((segment) => !!segment);

  const joinedSegments = segments.join('/');
  if (baseUrl) {
    return `${baseUrl}${prefix}${joinedSegments}`;
  }
  return `${prefix}${joinedSegments}`;
};
