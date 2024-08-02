/* eslint-disable unicorn/no-null */
import type { NullToUndefined, NullToUndefinedRecursive } from './types';

export const nullToUndefined = <T>(value?: T): NullToUndefined<T> => (value ?? undefined) as NullToUndefined<T>;

export const recursiveNullToUndefined = <T>(nullable: T): NullToUndefinedRecursive<T> => {
  if (Array.isArray(nullable)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return nullable.map((element) => recursiveNullToUndefined(element)) as NullToUndefinedRecursive<T>;
  } else if (typeof nullable === 'object' && nullable !== null) {
    const result: Record<string, unknown> = {};

    for (const key in nullable) {
      if (Object.hasOwn(nullable, key)) {
        const value = nullable[key];
        if (value != null) {
          result[key] = recursiveNullToUndefined(value);
        }
      }
    }
    return result as NullToUndefinedRecursive<T>;
  }

  return nullToUndefined(nullable) as NullToUndefinedRecursive<T>;
};
