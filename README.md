# Introduction

A repository where I can upload various libraries or configurations that I often find myself duplicating across my own projects.

## Configurations

- `@putstack/eslint-config-typescript` - A strict configuration for ESLint to be used in TypeScript projects.
  - It also comes with a `@putstack/eslint-config-typescript/base` option that is less strict, and thus might be easier to integrate into existing projects.
- `@putstack/prettier-config` - A prettier configuration that has sensible defaults, that should never require adjustment.

## Libraries

- `@putstack/utils` - A collection of utility functions that I often find myself needing in various projects.

# Getting Started

Clone the repository, and run `pnpm i` to install the dependencies - then you're good to go!
The project will lint and prettier itself as a pre-commit hook, so you will automatically adhere to all our style conventions!

# Contribute

Feel free to contribute to this repository if you think there's a bug, a rule is missing or misconfigured, or anything else!
If you're unsure how to fix it, feel free to open an issue.

Remember to add a changelog entry in the package you are adjusting, it should include a reason why the change was made. An example could be:

```
- Turn on `@typescript-eslint/default-param-last` to better match expectations from certain SonarQube setups. Rule documentation can be found [here](https://typescript-eslint.io/rules/default-param-last). This also turns off the standard `default-param-last` as described in the documentation.
```

# Roadmap

- Update `@putstack/eslint-config-typescript` to use flat eslint configuration.
