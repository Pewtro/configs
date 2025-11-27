export type NullToUndefined<T> = T extends null ? undefined : T;

/**
 * Takes an unknown type and gives you a type with any `null` values swapped to `undefined`. Works for scalar types, arrays, and objects. It is recursive, so it will work for nested objects and arrays.
 *
 * @example
 * number | null -> number | undefined
 * (boolean | null)[] -> (boolean | undefined)[]
 * { a: string | null } -> { a?: string }
 * { foo: (number | null)[] | null } => { foo?: (number | undefined)[] }
 */
export type NullToUndefinedRecursive<T> = T extends null
  ? undefined
  : T extends Array<unknown>
    ? SwapNullItemsForUndefined<T>
    : ConvertInterfaceToDict<T> extends Record<string, unknown>
      ? OmitNullProperties<ConvertInterfaceToDict<T>>
      : T;

type ConvertInterfaceToDict<T> = {
  [K in keyof T]: T[K];
};

type OmitNullProperties<ObjectType extends Record<string, unknown>> = {
  [K in keyof ObjectType]: NullToUndefinedRecursive<ObjectType[K]>;
};

type SwapNullItemsForUndefined<ArrayType extends Array<unknown>> = Array<NullToUndefinedRecursive<ArrayType[number]>>;
