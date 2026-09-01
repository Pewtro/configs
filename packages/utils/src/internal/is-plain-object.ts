/**
 * The recursive converters in this package are intended for JSON-like values:
 * plain objects and arrays. We intentionally do not recurse into instances such
 * as `Date`, `Map`, `Set`, or custom class instances because those objects carry
 * runtime semantics that should not be flattened into plain record data.
 *
 * This keeps handling predictable for JSON-like payloads while preserving runtime
 * objects that are meant to stay intact.
 */
export const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  if (typeof value !== 'object' || value == undefined) {
    return false;
  }

  return Object.prototype.toString.call(value) === '[object Object]';
};
