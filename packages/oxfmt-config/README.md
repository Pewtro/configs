# A Oxmt configuration by Putro

This is a simple configuration for Oxmt that I use across projects.

## Installation

To install this package run the following command in the terminal in the root directory of your application.

```sh
pnpm install -D @putstack/oxfmt-config
```

**OR**

```sh
npm install --save-dev @putstack/oxfmt-config
```

**OR**

```sh
yarn add -D @putstack/oxfmt-config
```

## Usage

Create a `.oxfmtrc.json`, `.oxfmtrc.jsonc`, `oxfmt.config.ts` or `oxfmt.config.mts` file in the root directory of your application and import the configuration from this package.

```ts
// oxfmt.config.ts
import config from '@putstack/oxfmt-config';
import { defineConfig } from 'oxfmt';

export default defineConfig({
  ...config,
  ignorePatterns: ['**/coverage/**', '**/dist/**', '**/node_modules/**', '**/build/**'],
});
```
