---
'@putstack/eslint-config-typescript': major
---

Migrate to eslint v9 and flat config

Replaced eslint-plugin-import with eslint-plugin-perfectionist
Upgraded typescript-eslint to v8
Only export a flat config since that is the future of eslint with a planned complete removal in v10
Remove eslint-plugin-progress

In order to migrate please check the [eslint configuration documentation](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), as well as the [typescript-eslint documentation](https://typescript-eslint.io/blog/announcing-typescript-eslint-v8-beta) for the new rules and configuration options.
