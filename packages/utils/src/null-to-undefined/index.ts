/* eslint-disable unicorn/no-null */
import type { NullToUndefined, NullToUndefinedRecursive } from './types';

export const nullToUndefined = <T>(value?: T): NullToUndefined<T> => (value ?? undefined) as NullToUndefined<T>;

export const recursiveNullToUndefined = <T>(nullable: T): NullToUndefinedRecursive<T> => {
  if (Array.isArray(nullable)) {
    return nullable.map((element: unknown) => recursiveNullToUndefined(element)) as NullToUndefinedRecursive<T>;
  }
  if (typeof nullable === 'object' && nullable != null) {
    const result: Record<string, unknown> = {};

    for (const key in nullable) {
      if (!Object.hasOwn(nullable, key)) {
        continue;
      }
      const typedKey: string = key;
      const value = nullable[typedKey as keyof T];
      if (value != null) {
        result[typedKey] = recursiveNullToUndefined(value);
      }
    }
    return result as NullToUndefinedRecursive<T>;
  }

  return nullToUndefined(nullable) as NullToUndefinedRecursive<T>;
};
