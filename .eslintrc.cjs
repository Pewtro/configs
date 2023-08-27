module.exports = {
  root: true,
  extends: ['@putro/typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
  },
  overrides: [
    {
      files: ['packages/eslint-config-typescript/**/index.js', 'packages/prettier/index.js'],
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
  ],
};
