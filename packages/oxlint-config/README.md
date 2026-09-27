# An Oxlint configuration by Putro

This package provides Oxlint presets that complement `@putstack/eslint-config-typescript`. The presets follow the same general rule intent where Oxlint has equivalent rules, using Oxlint's native TypeScript rules and type-aware linting.

## Installation

Install the package:

```sh
pnpm add -D @putstack/oxlint-config oxlint oxlint-tsgolint typescript
```

## Usage

Extend the recommended preset in `oxlint.config.ts`:

```ts
import { configs } from '@putstack/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [configs.recommended],
  options: {
    // Enable type-aware rules.
    typeAware: true,
    // If you want to integrate type checking (`tsc --noEmit`) into your linting process
    typeCheck: true,
  },
  // Must specify the environment by youself, customise as needed
  env: {
    browser: true,
    builtin: true,
    es2024: true,
    node: true,
  },
});
```

Add to your package.json if you want:

```json
{
  "scripts": {
    "lint": "oxlint",
    "lint:fix": "oxlint --fix"
  }
}
```

Run Oxlint; the root config enables type-aware rules:

```sh
pnpm lint
```

```sh
pnpm lint:fix
```
