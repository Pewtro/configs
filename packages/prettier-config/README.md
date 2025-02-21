# A Prettier configuration by Putro

This is a simple configuration for Prettier that I use across projects.

## Installation

To install this package run the following command in the terminal in the root directory of your application.

```
pnpm install -D @putstack/prettier-config
```

**OR**

```
npm install --save-dev @putstack/prettier-config
```

**OR**

```
yarn add -D @putstack/prettier-config
```

## Usage

Create a **.prettierrc**, **.prettierrc.yaml**, **.prettierrc.yml** or **.prettierrc.json** file and export a string.

**OR**

Create a **prettier.config.js** or **.prettierrc.js** file and export an object.

```
import putstackConfig from '@putstack/prettier-config';

/** @type {import("prettier").Config} */
const config = {
  ...putstackConfig,
  //Other rules
};

export default config;
```

## Example

This project use the prettier-config on itself, as seen in the root package.json file.
