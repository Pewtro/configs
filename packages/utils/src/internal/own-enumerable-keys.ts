/**
 * Own enumerable keys of an object, symbol keys included.
 *
 * `for...in` only walks string keys, so the recursive converters use this instead. Their result
 * types are built from `keyof T`, which includes symbols, so silently dropping them would make
 * the declared types wrong. `Reflect.ownKeys` returns own keys only, which also means inherited
 * and non-enumerable properties are excluded.
 */
export const ownEnumerableKeys = (value: object): Array<string | symbol> =>
  Reflect.ownKeys(value).filter((key) => Object.propertyIsEnumerable.call(value, key));
