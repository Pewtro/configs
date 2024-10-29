# @putstack/utils

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
