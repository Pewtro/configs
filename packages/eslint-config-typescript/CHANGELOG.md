# ESLint config for typescript changelog

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
