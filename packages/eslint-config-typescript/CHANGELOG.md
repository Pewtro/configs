# ESLint config for typescript changelog

## 3.0.0-next.13

### Minor Changes

- 021b2e9: Move to perfectionist 3.1.0 to add typescript-eslint v8 support

## 3.0.0-next.12

### Major Changes

- 673b4a6: Upgrade typescript-eslint package to 8.0.0
- c0212b7: Drop support for node v18 and v21

### Minor Changes

- 48d81a1: Update @eslint/js to 9.8.0 and set peer dependency to ^9.8.0
- 87e218b: Swap to recommended-natural over recommended-alphabetical in perfectionist

## 3.0.0-next.11

### Minor Changes

- 3002ce9: Turn off perfectionist/sort-switch-case for now

## 3.0.0-next.10

### Minor Changes

- f94c06f: Remove the experimental legeacy configs as it didn't work out nicely

## 3.0.0-next.9

### Minor Changes

- c4bc96a: Rename legacy/_ to legacy-_

## 3.0.0-next.8

### Minor Changes

- 46aa6f8: Add a legacy version of the configs for users who are not yet ready to move to eslint v9

## 3.0.0-next.7

### Minor Changes

- 017e428: Bump typescript-eslint to 8.0.0-alpha.54, eslint-plugin-unicorn to 55.0.0 and eslint-plugin-sonarjs to 1.0.4

  eslint-plugin-unicorn now ships with types letting us remove the last entry in packages.d.ts.

## 3.0.0-next.6

### Minor Changes

- aec4963: Update eslint-plugin-perfectionist to 3.0.0

### Patch Changes

- 7a32c74: Bump eslint-plugin-depend to 0.9.0
- b17e44c: Bump @typescript-eslint/utils and typescript-eslint to latest pre-release

## 3.0.0-next.5

### Minor Changes

- 9daf3e7: Enable prefer-arrow-callback in the base configuration

## 3.0.0-next.4

### Minor Changes

- 05f80ca: Migrate the eslint config to typescript for better ergonomics when developing the config
- 0be2380: Bump `@eslint/js` to 9.7.0 and `typescript-eslint` to 8.0.0-alpha.44

## 3.0.0-next.3

### Minor Changes

- 1e81358: Bump eslint to 9.6, eslint-plugin-depend to 0.8.0, typescript-eslint to 8.0.0-alpha.34
- 83091ea: Add eslint-plugin-progress and eslint-plugin-depend to the base config

## 3.0.0-next.2

### Patch Changes

- bfd5f0d: Turn @typescript-eslint/adjacent-overload-signatures off as recommended in perfectionist documentation

## 3.0.0-next.1

### Patch Changes

- f4dbb71: Automatically turn off type checking on any .js file

## 3.0.0-next.0

### Major Changes

- 5902af6: Migrate to eslint v9 and flat config

  Replaced eslint-plugin-import with eslint-plugin-perfectionist
  Upgraded typescript-eslint to v8
  Only export a flat config since that is the future of eslint with a planned complete removal in v10
  Remove eslint-plugin-progress

  In order to migrate please check the [eslint configuration documentation](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), as well as the [typescript-eslint documentation](https://typescript-eslint.io/blog/announcing-typescript-eslint-v8-beta) for the new rules and configuration options.

## 2.6.1

### Patch Changes

- 2bd97c6: Add support for Node 22

## 2.6.0

### Minor Changes

- 79abb71: Update @typescript-eslint/ to 7.7.1

### Patch Changes

- 41eabac: Update @typescript-eslint/\* to 7.6

## 2.5.0

### Minor Changes

- b4457ef: Update @typescript-eslint/\* to 7.4 and remove eslint-plugin-sonar as it's mostly covered by eslint-plugin-sonarjs and other rulesets

### Patch Changes

- 7e14f5f: Update required node versions to be `^18.18 || ^20.9 || ^21.1`

## 2.4.1

### Patch Changes

- 087f742: Update eslint-plugin-import-x and eslint-plugin-sonarjs
- 9c00d90: Set @typescript-eslint/no-unused-vars in the base config to allow unused variable names if they're prefixed with \_

## 2.4.0

### Minor Changes

- 50b527c: Replace eslint-plugin-import with eslint-plugin-import-x in preparation to move away from it fully over time

## 2.3.0

### Minor Changes

- d645787: Add eslint-plugin-sonar to base and recommended configuration

### Patch Changes

- 46c5299: Update eslint-plugin-sonarjs to 0.24.0
- 27ce461: [ESLint] Update @typescript-eslint/\* from 6.20.0 to 6.21.0 and eslint-plugin-unicorn from 50.0.1 to 51.0.1
- 6682e0a: Begin requiring eslint >8.57.0 in preparation for @typescript-eslint/\* v7
- b8c8e4e: Update @typescript-eslint/\* to 6.20.0

## 2.2.0

### Minor Changes

- d45165b: Revert changes in 2.1.0 about not shipping @typescript-eslint/\* packages, as this config is opioniated enough to always ship them.

## 2.1.0

### Minor Changes

- 1aa627c: BREAKING: No longer ships with @typescript-eslint/_ or @typescript-eslint/_ but instead marks them as peerDependencies
- 1b2e1fb: Drop support for typescript 4.X

## 2.0.3

### Patch Changes

- 22eadb7: Bump @typescript-eslint/\* to 6.18.0. For the full list of changes, see the [official repository](https://github.com/typescript-eslint/typescript-eslint/compare/v6.16.0...v6.18.0).
- 0b94296: Bump @typescript-eslint/\* to 6.18.1. For the full list of changes, see the [official repository](https://github.com/typescript-eslint/typescript-eslint/compare/v6.18.0...v6.18.1).

## 2.0.2

### Patch Changes

- 28c15a5: Bump @typescript-eslint/\* to 6.16.0 and eslint-plugin-unicorn to 50.0.1

## 2.0.1

### Patch Changes

- 962ec5f: Update eslint-plugin-unicorn to 50.0.1
- 0eb0c46: Update @typescript-eslint/\* to 6.15.0

## 2.0.0

### Major Changes

- 171c8c0: Added eslint-plugin-import and eslint-import-resolver-typescript to dependencies
  - Enabled @typescript-eslint/consistent-type-imports.
  - Enabled @typescript-eslint/consistent-type-exports.
  - Enabled import/consisten-type-specifier-style to prefer top-level types in imports.-
  - Enabled @typescript-eslint/no-import-type-side-effects to enforce moving import types to the top-level if all the types are inline.

## 1.2.0

### Minor Changes

- cd4af02: Update @typescript-eslint/\* packages to 6.13.2

## 1.1.3

### Patch Changes

- 796c52c: [Chore] Update dependencies for Node.js LTS moving to v20
- e90e48f: Updated @typescript-eslint/\* to `6.9.1`.
  Updated eslint-plugin-unicorn to `49.0.0`.
  Updated eslint-plugin-sonarjs to `0.23.0`.

## 1.1.2

### Patch Changes

- 13ad8c5: Update @typescript-eslint/\* dependencies from 6.7.4 to 6.7.5
- 6d36924: Update @typescript-eslint/\* dependencies from 6.7.3 to 6.7.4

## 1.1.1

### Patch Changes

- 5b885b9: [Chore] Bump dependencies

## 1.1.0

### Minor Changes

- 93273ef: Default prefer-module from unicorn to be turned on as it's easy for consumers to turn it off - but we should transition towards ESM in general

### Patch Changes

- 4f28190: Bump `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` to `6.7.0`.

## 1.0.0

### Major Changes

- c59e5c9: First release of `@putstack/eslint-config-typescript` that provides sensible, but strict, defaults for new and existing projects.
  If the default is too strict, there is also a `@putstack/eslint-config-typescript/base` that is less strict that you can start out with.
