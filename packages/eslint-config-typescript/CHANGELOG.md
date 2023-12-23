# ESLint config for typescript changelog

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
