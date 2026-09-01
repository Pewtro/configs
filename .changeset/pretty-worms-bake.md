---
'@putstack/utils': patch
---

Fix `generatePath` to correctly omit optional route segments when their value is missing and keep them when present in both `:param?` and `{param?}` syntax.
