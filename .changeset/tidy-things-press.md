---
'@putstack/utils': patch
---

Fix recursive conversion helpers to only recurse into plain objects and arrays, preserving non-plain object instances like `Date` while still converting nested `null` and `undefined` values.
