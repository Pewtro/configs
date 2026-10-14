/* eslint-disable unicorn/no-null, @typescript-eslint/no-unnecessary-type-assertion */
import { isPlainObject } from '../internal/is-plain-object.js';
import { ownEnumerableKeys } from '../internal/own-enumerable-keys.js';
import type { UndefinedToNull, UndefinedToNullRecursive } from './types';

export const undefinedToNull = <T>(value?: T): UndefinedToNull<T> => (value ?? null) as UndefinedToNull<T>;

/**
 * Recursively replaces `undefined` with `null`, keeping every property.
 *
 * Properties are kept rather than dropped, so they survive `JSON.stringify`, which would
 * otherwise omit them. Note that this is not the exact inverse of `recursiveNullToUndefined`,
 * which drops its nullish properties: a property removed there will not be brought back here.
 */
export const recursiveUndefinedToNull = <T>(nullable: T): UndefinedToNullRecursive<T> => {
  if (nullable == null) {
    return undefinedToNull(nullable) as UndefinedToNullRecursive<T>;
  }

  if (Array.isArray(nullable)) {
    return nullable.map((element: unknown) => recursiveUndefinedToNull(element)) as UndefinedToNullRecursive<T>;
  }

  if (isPlainObject(nullable)) {
    const source: Record<PropertyKey, unknown> = nullable;
    const result: Record<PropertyKey, unknown> = {};

    for (const key of ownEnumerableKeys(source)) {
      result[key] = recursiveUndefinedToNull(source[key]);
    }
    return result as UndefinedToNullRecursive<T>;
  }

  return undefinedToNull(nullable) as UndefinedToNullRecursive<T>;
};
