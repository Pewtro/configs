module.exports = {
  root: true,
  extends: ['@putstack/typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    //Until we get to ESLint v9 with stable flat config, we need to turn this off
    'unicorn/prefer-module': 'off',
  },
};
