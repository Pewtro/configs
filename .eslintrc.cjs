module.exports = {
  root: true,
  extends: ['@putstack/typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
  },
  rules: {
    'unicorn/prefer-module': 'off',
  },
};
