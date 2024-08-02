# An ESLint configuration by Putro

This ESLint setup should let any new (or existing) projects adhere to best practices within TypeScript and write fewer bugs as a result!
The default version is quite strict, so an existing project might opt for using the base version, see more under [Usage](#Usage).

The latest version (v3 and up) is using the new flat configuration from eslint and eslint v9. If you are not ready for this change, please stick with `2.6.1` or below.

## Installation

To install this package run the following command in the terminal in the root directory of your application.

```sh
pnpm install -D @putstack/eslint-config-typescript
```

**OR**

```sh
npm install --save-dev @putstack/eslint-config-typescript
```

**OR**

```sh
yarn add -D @putstack/eslint-config-typescript
```

## Usage

Ensure that your ESLint configuration is setup to utilize TypeScript's type checking API by following this [guide](https://typescript-eslint.io/linting/typed-linting). Note that if you're using this in a monorepo, you _SHOULD_ keep `"project":"true"` despite that the guide says otherwise in my experience.

Add this to your config by editing your eslint.config.js file or equivalent.

```js
import putstack from '@putstack/eslint-config-typescript';

export default [...putstack.configs.recommended];
```

If the default is too strict on an existing project, you can also use the `base` configuration to exclude some of the more strict rules.
To see what is dincluded in which package, please view [this section](#eslint-plugins-and-configurations).

```js
import putstack from '@putstack/eslint-config-typescript';

export default [...putstack.configs.base];
```

## Example

This project uses the configuration on itself, as seen in the root eslint.config.js file.

## ESLint rules

## ESLint PLugins and Configurations

This is a list of the plugins and configurations that are extended from.

### Base

#### Plugins

- [eslint-plugin-depend](https://github.com/es-tooling/eslint-plugin-depend) - An ESLint plugin for suggesting optimisations in choice of dependency, native equivalents, etc.
- [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist) - ESLint plugin for sorting various data such as objects, imports, types, enums, JSX props, etc.
- [eslint-plugin-progress](https://github.com/taskworld/eslint-plugin-progress) - Report progress when running ESLint. Useful for large projects with thousands of files, so it's obvious that something is running!
- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs) - Code smell, bug detection, cognitive complexity and more.
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin) - A large amount of TypeScript related ESLint rules, using the [recommended](https://typescript-eslint.io/linting/configs#projects-with-type-checking) type checking rules.

#### Configurations

- [eslint](https://eslint.org/docs/latest/rules/)
  - [recommended](https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js) - The set of rules which are recommended for all projects by the ESLint team, indicated by the ✅ on the [rule list](https://eslint.org/docs/latest/rules/).
- [eslint-plugin-depend](https://github.com/es-tooling/eslint-plugin-depend/tree/main/src/configs)
  - [recommended](https://github.com/es-tooling/eslint-plugin-depend/blob/main/src/configs/recommended.ts) - Using the recommended setup to catch dependency issues.
- [eslint-plugin-perfectionist](https://perfectionist.dev/configs/recommended-natural)
  - [recommended-natural](https://perfectionist.dev/configs/recommended-natural) - Using the recommended setup to sort imports and other data naturally. Natural sort compares strings containing a mixture of letters and numbers, just as a human would do when sorting. For example: `item-1`, `item-2`, `item-10`.
- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs#usage)
  - [recommended](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/src/index.ts) - Using sonarjs recommended setup to catch general code smells.
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/main)
  - [recommended-type-checked](https://typescript-eslint.io/linting/configs#recommended-type-checked) - To see a full list of the rules, click [here](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-type-checked.ts).
  - [stylistic-type-checked](https://typescript-eslint.io/linting/configs#stylistic-type-checked) - To see a full list of the rules, click [here](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/stylistic-type-checked.ts).

### Recommended

Recommended extends the base setup further to add additional rules, therefore it also includes all the rules above.

#### Plugins

- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn/tree/main) - This plugin provides more than 100 powerful ESLint rules of which many are auto-fixable making it easy to fix any issues that arise!

#### Configurations

- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/index.js)
  - [recommended](https://github.com/sindresorhus/eslint-plugin-unicorn?tab=readme-ov-file#recommended-config) - Using the recommended configuration to catch common issues and enforce best practices.
