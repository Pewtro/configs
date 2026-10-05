# PutStack Configs

This repository is a pnpm workspace containing the reusable configuration packages and small utilities I use across my TypeScript projects.

## Included packages

- `@putstack/eslint-config-typescript` — strict ESLint flat config for TypeScript projects with recommended and base presets.
- `@putstack/oxlint-config` — Oxlint presets for TypeScript-focused linting.
- `@putstack/oxfmt-config` — formatter configuration for Oxfmt.
- `@putstack/prettier-config` — shared Prettier defaults.
- `@putstack/utils` — a small utility library used across projects.

## Getting started

Install dependencies:

```sh
pnpm install
```

Common workspace commands:

```sh
pnpm build
pnpm test
pnpm lint
pnpm typecheck
pnpm stylecheck
```

## Contributing

Contributions are welcome. If you find a rule that should be adjusted, a config that is missing, or a bug in one of the packages, feel free to open an issue or submit a pull request.

When making a release-worthy change, add a changeset:

```sh
pnpm changeset
```
