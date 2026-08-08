import unicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import { base } from './base';

const unicornConfig = defineConfig(unicorn.configs.recommended, {
  rules: {
    'unicorn/consistent-class-member-order': 'off',
    'unicorn/single-line-block-comment-style': [
      'error',
      'multiline',
      {
        ignore: ['^@type'],
      },
    ],
  },
});

export const recommended = defineConfig(base, unicornConfig);
