module.exports = {
  extends: ['./base', 'plugin:unicorn/recommended'],
  rules: {
    //JavaScript Modules (ESM) are too finnicky to be used by default for now.
    'unicorn/prefer-module': 'off',
  },
};
