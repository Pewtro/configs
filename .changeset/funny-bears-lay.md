---
'@putstack/utils': minor
---

Add functions to move types and values between undefined and null more easily

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
