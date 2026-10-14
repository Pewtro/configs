/* eslint-disable unicorn/no-null */
import { isPlainObject } from '../internal/is-plain-object.js';
import { ownEnumerableKeys } from '../internal/own-enumerable-keys.js';
import type { NullToUndefined, NullToUndefinedRecursive } from './types.js';

export const nullToUndefined = <T>(value?: T): NullToUndefined<T> => (value ?? undefined) as NullToUndefined<T>;

/**
Recursively replaces `null` with `undefined`, dropping any property whose value was `null` or
`undefined`.

Note that this is not the exact inverse of `recursiveUndefinedToNull`, which keeps its
properties. Dropping a property here is equivalent to setting it to `undefined`, because
`JSON.stringify` omits `undefined` properties either way, but it does mean a `null` property
cannot be recovered by converting back.
*/
export const recursiveNullToUndefined = <T>(nullable: T): NullToUndefinedRecursive<T> => {
  if (Array.isArray(nullable)) {
    return nullable.map((element: unknown) => recursiveNullToUndefined(element)) as NullToUndefinedRecursive<T>;
  }
  if (isPlainObject(nullable)) {
    const source: Record<PropertyKey, unknown> = nullable;
    const result: Record<PropertyKey, unknown> = {};

    for (const key of ownEnumerableKeys(source)) {
      const value = source[key];
      if (value != null) {
        result[key] = recursiveNullToUndefined(value);
      }
    }
    return result as NullToUndefinedRecursive<T>;
  }

  return nullToUndefined(nullable) as NullToUndefinedRecursive<T>;
};
