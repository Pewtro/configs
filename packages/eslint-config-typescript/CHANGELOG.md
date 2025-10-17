# ESLint config for typescript changelog

## 4.10.0

### Minor Changes

- b1fef17: Update eslint-plugin-de-morgan to 2.0.0. It is now shipped as ESM-only, this should not be a breaking change considering this package is already ESM-only.
- 42387ad: Update eslint-plugin-depend to 1.3.1

### Patch Changes

- dc4c83c: Update eslint-plugin-perfectionist to 4.15.1

## 4.9.0

### Minor Changes

- 629b8d0: Update eslint-plugin-sonarjs to 3.0.5

## 4.8.1

### Patch Changes

- bbcd30a: Update eslint-plugin-unicorn to 61.0.2

## 4.8.0

### Minor Changes

- e0f4705: Update eslint-plugin-unicorn to 61.0.1

### Patch Changes

- 16ae5fd: Update eslint-plugin-de-morgan to 1.3.1

## 4.7.0

### Minor Changes

- 263a9f7: Update eslint-plugin-import-x to 4.16.0
- 3fd9f98: Update eslint-plugin-unicorn to 60.0.0
  - This means that minimum node version is also bumped to 20.10 from 20.9.

### Patch Changes

- cdbd590: Update eslint-plugin-import-x to 4.16.1
- 9fcf53b: Update eslint-import-resolver-typescript to 4.4.4

## 4.6.0

### Minor Changes

- 938d1c1: Add eslint-plugin-import-x to improve import handling specifically around duplicates and types in addition to the existing sorting done by eslint-plugin-perfectionist
- 6244f23: Update eslint-plugin-perfectionist to 4.15.0

## 4.5.0

### Minor Changes

- 82ce869: Update eslint-plugin-de-morgan to 1.3.0
- b9aeb25: Update eslint-plugin-perfectionist to 4.14.0
- d7b0cb5: Update usage of @typescript-eslint/consistent-type-imports and @typescript-eslint/consistent-type-exports to improve removal of type imports/exports during builds

## 4.4.0

### Minor Changes

- 76180bc: Update eslint-plugin-perfectionist to 4.13.0
- 2f17032: Update eslint-plugin-depend to 1.2.0 to not flag eslint-plugin-unicorn
- 0f9b7b7: Update eslint-plugin-depend to 1.1.0

### Patch Changes

- e0c11ba: Update eslint-plugin-unicorn to 59.0.1

## 4.3.0

### Minor Changes

- 1673fd1: Update eslint-plugin-perfectionist to 4.11.0
- 40ed84a: Update eslint-plugin-depend to 1.0.0
- be72a68: Update eslint-plugin-unicorn to 59.0.0
- d3c554c: Update eslint-plugin-perfectionist to 4.12.3

## 4.2.0

### Minor Changes

- a5b6329: Update eslint-plugin-unicorn to 58.0.0
- 47e545f: Update eslint-plugin-perfectionist to 4.10.0

### Patch Changes

- 6d253f5: Update eslint-plugin-perfectionist to 4.10.1
- 7062c53: Update eslint-plugin-de-morgan to 1.2.1

## 4.1.0

### Minor Changes

- 57f10c3: Add eslint-plugin-de-morgan to the base configuration.

  It is an ESLint plugin that enforces logical consistency by transforming negated boolean expressions according to De Morgan’s laws.

- a943f15: Update eslint-plugin-de-morgan to 1.2.0

## 4.0.0

### Major Changes

- 8674582: This package is now ESM only. You can read sindresorhus' snippet on pure ESM packages [here](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) for more information.
- 6a20329: Update eslint-plugin-unicorn to 57.0.0 which changes it to ESM-only and adds a bunch of new rules, see more [here](https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v57.0.0).

### Minor Changes

- 6c42c03: Update minimum version of eslint to 9.20.1
- 3743fae: Update eslint-plugin-perfectionist to 4.9.0
- ce77799: Update minimum version of @typescript-eslint/utils and typescript-eslint to 8.24.1
- 39e77f5: Update eslint-plugin-perfectionist to 4.8.0
- 11b3f66: Update minimum version of @eslint/js to 9.20.0

## 3.19.0

### Minor Changes

- edd94b4: Drop support for node 21, and broaden support for >=22
- 05fe31e: Move @eslint/js to a peer dependency to allow a broader range of versions
- afb0d90: Update minimum version of @eslint/js and eslint to 9.19.0
- 29dbb05: Update minimum version of @typescript-eslint/utils and typescript-eslint to 8.22.0

## 3.18.0

### Minor Changes

- f97f89c: Update eslint-plugin-perfectionist to 4.7.0
- fcf2c7b: Move @typescript-eslint/utils and typescript-eslint to peerDependencies to allow for users to upgrade faster
- 1a2ba0c: Update @typescript-eslint/utils and typescript-eslint minimum versions to 8.21.0

## 3.17.0

### Minor Changes

- dd7d6f9: Update @typescript-eslint/utils and typescript-eslint to 8.20.0
- d743780: Update @eslint/js to 9.18.0

### Patch Changes

- a57e908: Update @typescript-eslint/utils and typescript-eslint to 8.19.1

## 3.16.0

### Minor Changes

- 4fc5fd0: Update @typescript-eslint/utils and typescript-eslint to 8.19.0
- 4dac73f: Update eslint-plugin-perfectionist to 4.6.0

## 3.15.0

### Minor Changes

- 1aefda5: Update eslint-plugin-perfectionist to 4.4.0

### Patch Changes

- 0496f91: Update @typescript-eslint/utils and typescript-eslint to 8.18.2

## 3.14.1

### Patch Changes

- 988ede8: Update @typescript-eslint/utils and typescript-eslint to 8.18.1

## 3.14.0

### Minor Changes

- f24c745: Update @typescript-eslint/utils and typescript-eslint to 8.18.0
- dbe616a: Update @eslint/js to 9.17.0
- b886f1a: Update eslint-plugin-perfectionist to 4.3.0

## 3.13.0

### Minor Changes

- 1b842c0: Update @typescript-eslint/utils and typescript-eslint to 8.17.0
- 44bd1b8: Update @eslint/js to 9.16.0
- 431ceea: Update eslint-plugin-perfectionist to 4.2.0

## 3.12.0

### Minor Changes

- d0f6560: Update @typescript-eslint/utils and typescript-eslint to 8.16.0 to support typescript 5.7
- c396ebc: Update eslint-plugin-perfectionist to 4.1.2

## 3.11.0

### Minor Changes

- 6ec64aa: Update @typescript-eslint/utils and typescript-eslint to 8.15.0
- 156c569: Update @eslint/js to 9.15.0
- 7e3896d: Update @typescript-eslint/utils and typescript-eslint to 8.14.0
- 6635cf9: Update eslint-plugin-perfectionist to 4.0.3

### Patch Changes

- 43b591f: Update eslint-plugin-unicorn to 56.0.1 for eslint 9.15.0 compatability

## 3.10.0

### Minor Changes

- fc3dcd4: Update @eslint/js to 9.14.0, which includes built-in types
- 8ec3d4e: Update @typescript-eslint/utils and typescript-eslint to 8.13.0
- 8c69328: Update eslint-plugin-depend to 0.12.0

## 3.9.1

### Patch Changes

- 6b2c6c6: Update @typescript-eslint/utils and typescript-eslint to 8.12.2

## 3.9.0

### Minor Changes

- bb70b85: Update @typescript-eslint/utils and typescript-eslint to 8.11.0
- fa3e8a9: Update @typescript-eslint/utils and typescript-eslint to 8.12.0
- 8199b07: Update @eslint/js to 9.13.0

## 3.8.0

### Minor Changes

- 48a2100: Update @typescript-eslint/utils and typescript-eslint to 8.10.0 to support typescript 5.6
- 6ca6426: Update eslint-plugin-perfectionist to 3.9.1

## 3.7.0

### Minor Changes

- 753e6c8: Update eslint-plugin-unicorn to 56.0.0
- 63cc965: Update @eslint/js to 9.12.0

### Patch Changes

- 4bb96ab: Update @typescript-eslint/utils and typescript-eslint to 8.8.1

## 3.6.0

### Minor Changes

- 7a0fc68: Update eslint-plugin-perfectionist to 3.8.0
- 72501e7: Update @typescript-eslint/utils and typescript-eslint to 8.8.0

## 3.5.0

### Minor Changes

- 3bed0b7: Update perfectionist/sort-objects to sort naturally instead of alphabetically
- 5ba7fa5: Update perfectionist/sort-imports to sort naturally instead of alphabetical
- 0dc9df3: Add partitionByComment to applicable perfectionist rules to allow users more easily to add comments for readability

## 3.4.0

### Minor Changes

- 8cd9ba7: Update eslint-plugin-perfectionist to 3.7.0
- fe63e99: Update @eslint/js to 9.11.0
- f6d3d2f: Update @typescript-eslint/utils and typescript-eslint to 8.7.0
- 7b0d7e6: Update eslint-plugin-perfectionist to 3.6.0
- 670f2ad: Update typescript-eslint to 8.6.0

### Patch Changes

- c135ef5: Update @eslint/js to 9.11.1

## 3.3.0

### Minor Changes

- 7758f2e: Update @eslint/js to 9.10.0
- 3f04074: Update eslint-plugin-perfectionist to 3.5.0
- 474cae2: Update typescript-eslint and @typescript-eslint/utils to 8.5.0

## 3.2.0

### Minor Changes

- 5acdc2a: Update eslint-plugin-perfectionist to 3.3.0
- a646c3c: Update typescript-eslint dependencies to 8.3.0

### Patch Changes

- d279bec: Update @eslint/js to 9.9.1
- deb99e8: Update eslint-plugin-depend to 0.11.0

## 3.1.0

### Minor Changes

- 02daf5b: Update dependencies and peer dependencies
  Dependencies updated:
  - @eslint/js to 9.9.0
  - @typescript-eslint/utils to 8.1.0
  - eslint-plugin-depend to 0.10.0
  - eslint-plugin-perfectionist to 3.1.3
  - typescript-eslint to 8.1.0

  Peer dependencies updated:
  - eslint to 9.9.0

## 3.0.1

### Patch Changes

- ee5552b: Bump typescript-eslint to 8.0.1
- 02a04cf: Bump eslint-plugin-perfectionist to 3.1.2

## 3.0.0

### Major Changes

- 673b4a6: Upgrade typescript-eslint package to 8.0.0
- c0212b7: Drop support for node v18 and v21
- 5902af6: Migrate to eslint v9 and flat config

  Replaced eslint-plugin-import with eslint-plugin-perfectionist
  Upgraded typescript-eslint to v8
  Only export a flat config since that is the future of eslint with a planned complete removal in v10
  Remove eslint-plugin-progress

  In order to migrate please check the [eslint configuration documentation](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), as well as the [typescript-eslint documentation](https://typescript-eslint.io/blog/announcing-typescript-eslint-v8-beta) for the new rules and configuration options.

### Minor Changes

- 1e81358: Bump eslint to 9.6, eslint-plugin-depend to 0.8.0, typescript-eslint to 8.0.0-alpha.34
- 9daf3e7: Enable prefer-arrow-callback in the base configuration
- 021b2e9: Move to perfectionist 3.1.0 to add typescript-eslint v8 support
- aec4963: Update eslint-plugin-perfectionist to 3.0.0
- 3002ce9: Turn off perfectionist/sort-switch-case for now
- 83091ea: Add eslint-plugin-progress and eslint-plugin-depend to the base config
- f94c06f: Remove the experimental legeacy configs as it didn't work out nicely
- 46aa6f8: Add a legacy version of the configs for users who are not yet ready to move to eslint v9
- 05f80ca: Migrate the eslint config to typescript for better ergonomics when developing the config
- 48d81a1: Update @eslint/js to 9.8.0 and set peer dependency to ^9.8.0
- 0be2380: Bump `@eslint/js` to 9.7.0 and `typescript-eslint` to 8.0.0-alpha.44
- c4bc96a: Rename legacy/_ to legacy-_
- 017e428: Bump typescript-eslint to 8.0.0-alpha.54, eslint-plugin-unicorn to 55.0.0 and eslint-plugin-sonarjs to 1.0.4

  eslint-plugin-unicorn now ships with types letting us remove the last entry in packages.d.ts.

- 87e218b: Swap to recommended-natural over recommended-alphabetical in perfectionist

### Patch Changes

- 7a32c74: Bump eslint-plugin-depend to 0.9.0
- b17e44c: Bump @typescript-eslint/utils and typescript-eslint to latest pre-release
- f4dbb71: Automatically turn off type checking on any .js file
- bfd5f0d: Turn @typescript-eslint/adjacent-overload-signatures off as recommended in perfectionist documentation

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
