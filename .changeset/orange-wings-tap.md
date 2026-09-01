---
'@putstack/utils': patch
---

Fix recursive `undefinedToNull` handling when the input is `null`, so it preserves `null` instead of incorrectly converting it into an empty object.
