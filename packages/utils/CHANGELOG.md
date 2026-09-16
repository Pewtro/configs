# @putstack/utils

## 0.4.5

### Patch Changes

- 70ac6d9: Fix `generatePath` to support hyphenated route parameter names in both `:param-name` and `{param-name}` syntax.
- 6146164: Fix `generatePath` to support dotted route parameter names in both `:param.name` and `{param.name}` syntax.
- 66b9dd7: Fix recursive `undefinedToNull` handling when the input is `null`, so it preserves `null` instead of incorrectly converting it into an empty object.
- 4e3d630: Fix `generatePath` to correctly omit optional route segments when their value is missing and keep them when present in both `:param?` and `{param?}` syntax.
- a314c00: Fix recursive conversion helpers to only recurse into plain objects and arrays, preserving non-plain object instances like `Date` while still converting nested `null` and `undefined` values.

## 0.4.4

### Patch Changes

- ea3007f: Mark package with sideEffects false for better tree shakeability

## 0.4.3

### Patch Changes

- efc1490: Improve treeshaking by allowing subpath imports (e.g. `@putstack/utils/http`)

## 0.4.2

### Patch Changes

- 21b7359: Slight simplification to NullToUndefinedRecursive and UndefinedToNullRecursive were null/undefined types were overriding the Exclude

## 0.4.1

### Patch Changes

- dc4127b: Minor tweaks to avoid unreachable code

## 0.4.0

### Minor Changes

- 8674582: This package is now ESM only. You can read sindresorhus' snippet on pure ESM packages [here](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) for more information.

## 0.3.0

### Minor Changes

- edd94b4: Drop support for node 21, and broaden support for >=22

## 0.2.1

### Patch Changes

- f2df0be: Update type of parameters in generatePath function

## 0.2.0

### Minor Changes

- 60c6952: Add functions to move types and values between undefined and null more easily

  Functions:
  nullToUndefined - Convert null to undefined
  undefinedToNull - Convert undefined to null
  recursiveNullToUndefined - Remove null values from any value (array, object, etc.)
  recursiveUndefinedToNull - Remove undefined values from any value (array, object, etc.)

  Types:
  NullToUndefined - Transform a null type to undefined
  UndefinedToNull - Transform an undefined type to null
  NullToUndefinedRecursive - Takes an unknown complex type and replaces null values with undefined
  UndefinedToNullRecursive - Takes an unknown complex type and replaces undefined values with null

- 86b13be: Improve dual publishing behaviour of esm / cjs

### Patch Changes

- 1b0eb83: Using regex.exec(string) over string.match(regex)

## 0.2.0-next.2

### Minor Changes

- 60c6952: Add functions to move types and values between undefined and null more easily

  Functions:
  nullToUndefined - Convert null to undefined
  undefinedToNull - Convert undefined to null
  recursiveNullToUndefined - Remove null values from any value (array, object, etc.)
  recursiveUndefinedToNull - Remove undefined values from any value (array, object, etc.)

  Types:
  NullToUndefined - Transform a null type to undefined
  UndefinedToNull - Transform an undefined type to null
  NullToUndefinedRecursive - Takes an unknown complex type and replaces null values with undefined
  UndefinedToNullRecursive - Takes an unknown complex type and replaces undefined values with null

## 0.2.0-next.1

### Minor Changes

- 86b13be: Improve dual publishing behaviour of esm / cjs

## 0.1.2-next.0

### Patch Changes

- 1b0eb83: Using regex.exec(string) over string.match(regex)

## 0.1.1

### Patch Changes

- 2bd97c6: Add support for Node 22

## 0.1.0

### Minor Changes

- 9eeef80: First release of @putstack/utils - initially bringing the generatePath method.
