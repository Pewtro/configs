/* eslint-disable unicorn/no-null */
import type { UndefinedToNull, UndefinedToNullRecursive } from './types';

export const undefinedToNull = <T>(value?: T): UndefinedToNull<T> => (value ?? null) as UndefinedToNull<T>;

export const recursiveUndefinedToNull = <T>(nullable: T): UndefinedToNullRecursive<T> => {
  if (Array.isArray(nullable)) {
    return nullable.map((element: unknown) => recursiveUndefinedToNull(element)) as UndefinedToNullRecursive<T>;
  }
  if (typeof nullable === 'object') {
    const result: Record<string, unknown> = {};

    for (const key in nullable) {
      if (!Object.hasOwn(nullable, key)) {
        continue;
      }
      const typedKey: string = key;
      const value = nullable[typedKey as keyof T];
      result[typedKey] = recursiveUndefinedToNull(value);
    }
    return result as UndefinedToNullRecursive<T>;
  }

  return undefinedToNull(nullable) as UndefinedToNullRecursive<T>;
};
