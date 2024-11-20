export type UndefinedToNull<T> = T extends undefined ? null : T;

export type UndefinedToNullRecursive<T> = T extends undefined
  ? Exclude<T, undefined> | null
  : T extends Array<unknown>
    ? SwapUndefinedItemsForNull<T>
    : ConvertInterfaceToDict<T> extends Record<string, unknown>
      ? NullUndefinedProperties<ConvertInterfaceToDict<T>>
      : T;

type ConvertInterfaceToDict<T> = {
  [K in keyof T]: T[K];
};

type NullUndefinedProperties<ObjectType extends Record<string, unknown>> = {
  [K in keyof ObjectType]: UndefinedToNullRecursive<ObjectType[K]>;
};

type SwapUndefinedItemsForNull<ArrayType extends Array<unknown>> = Array<UndefinedToNullRecursive<ArrayType[number]>>;
