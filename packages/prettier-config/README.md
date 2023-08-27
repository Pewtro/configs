# A Prettier configuration by Putro

This is a simple configuration for Prettier that I use across projects.

## Installation

To install this package run the following command in the terminal in the root directory of your application.

```
npm install --save-dev @putro/prettier-config
```

**OR**

```
yarn add -D @putro/prettier-config
```

## Usage

Add a key in your **package.json** file.

```
"prettier": "@putro/prettier-config"
```

**OR**

Create a **.prettierrc**, **.prettierrc.yaml**, **.prettierrc.yml** or **.prettierrc.json** file and export a string.

**OR**

Create a **prettier.config.js** or **.prettierrc.js** file and export an object.

```
module.exports = {
    ...require("@putro/prettier-config"),
    endOfLine: 'lf', //to overwriter any configuration
}
```

## Example

This project use the prettier-config on itself, as seen in the root package.json file.
