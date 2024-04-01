//Recursive helper for finding path parameters in the absence of wildcards
// In: '/users/:userId/posts/:postId'
// Out: { userId: string, postId: string }
type PathParameter<Path extends string> = Path extends `${infer L}/${infer R}`
  ? PathParameter<L> | PathParameter<R>
  : Path extends `:${infer Parameter}`
    ? Parameter
    : Path extends `{${infer Parameter}}`
      ? Parameter
      : never;

export const generatePath = <Path extends string>(
  path: Path,
  parameters: { [key in PathParameter<Path>]: string },
  baseUrl?: string,
) => {
  //Ensure the "/" prefix is present if the path starts with a "/" and the baseUrl does not end with a "/"
  const shouldPrefixDueToPath = path.startsWith('/') && !baseUrl?.endsWith('/');
  //Ensure the "/" prefix is present if the baseUrl does not end with a "/"
  const shouldPrefixDueToBaseUrl = !!baseUrl && !baseUrl.endsWith('/');
  const shouldPrefix = shouldPrefixDueToPath || shouldPrefixDueToBaseUrl;
  const prefix = shouldPrefix ? '/' : '';

  const isPathParameter = (segment?: string): segment is PathParameter<Path> =>
    path.includes(`:${segment}`) || path.includes(`{${segment}}`);

  const segments = path
    .split(/\/+/)
    .map((segment) => {
      const keyMatch = segment.match(/^:(\w+)(\??)$/) ?? segment.match(/^{(\w+)}(\??)$/);
      if (keyMatch) {
        const [, key] = keyMatch;
        if (isPathParameter(key)) {
          return parameters[key];
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
