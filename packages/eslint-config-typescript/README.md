# An ESLint configuration by Putro

This ESLint setup should let any new (or existing) projects adhere to best practices within TypeScript and write fewer bugs as a result!
The default version is quite strict, so an existing project might opt for using the base version, see more under [Usage](#Usage).

## Installation

To install this package run the following command in the terminal in the root directory of your application.

```
pnpm install -D @putstack/eslint-config-typescript
```

**OR**

```
npm install --save-dev @putstack/eslint-config-typescript
```

**OR**

```
yarn add -D @putstack/eslint-config-typescript
```

## Usage

Ensure that your ESLint configuration is setup to utilize TypeScript's type checking API by following this [guide](https://typescript-eslint.io/linting/typed-linting). Note that if you're using this in a monorepo, you _SHOULD_ keep `"project":"true"` despite that the guide says otherwise.

Add this to your config by editing your .eslintrc.cjs or equivalent.

```
{
    extends: ['@putstack/typescript'],
}
```

If the default is too strict on an existing project, you can also use the `base`to exclude some of the more strict rules.
To see what is dincluded in which package, please view [this section](#eslint-plugins-and-configurations).

```
{
    extends: ['@putstack/typescript/base']
}
```

## Example

This project uses the configuration on itself, as seen in the root .eslintrc.cjs file.

## ESLint rules

## ESLint PLugins and Configurations

This is a list of the plugins and configurations that are extended from.

### Base

#### Plugins

- [@typescript-eslint/plugin](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin) - A large amount of TypeScript related ESLint rules, using the [recommended](https://typescript-eslint.io/linting/configs#projects-with-type-checking) type checking rules.
- [eslint-plugin-progress](https://github.com/taskworld/eslint-plugin-progress) - Report progress when running ESLint. Useful for large projects with thousands of files, so it's obvious that something is running!
- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs) - Code smell, bug detection, cognitive complexity and more.

#### Configurations

- [eslint:recommended](https://eslint.org/docs/latest/rules/) - The set of rules which are recommended for all projects by the ESLint team, indicated by the ✅ on the [rule list](https://eslint.org/docs/latest/rules/).
- [plugin:@typescript-eslint/recommended-type-checked](https://typescript-eslint.io/linting/configs#recommended-type-checked) - To see a full list of the rules, click [here](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-type-checked.ts).
- [plugin:@typescript-eslint/stylistic-type-checked](https://typescript-eslint.io/linting/configs#stylistic-type-checked) - To see a full list of the rules, click [here](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/stylistic-type-checked.ts).
- [plugin:sonarjs/recommended](https://github.com/SonarSource/eslint-plugin-sonarjs#usage) - Using sonarjs recommended setup to catch general code smells.

### Recommended

Recommended extends the base setup further to add additional rules, therefore it also includes all the rules above.

#### Plugins

- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn#recommended-config) - This plugin provides more than 100 powerful ESLint rules of which many are auto-fixable making it easy to fix any issues that arise!

#### Configurations
