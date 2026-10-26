import unicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import { base } from './base';

const unicornConfig = defineConfig(unicorn.configs.recommended, {
  rules: {
    //This conflicts with perfectionist sorting rules, so we turn it off in favor of perfectionist
    'unicorn/consistent-class-member-order': 'off',
    //These cause too much noise and not enough value
    'unicorn/name-replacements': 'off',
    'unicorn/no-asterisk-prefix-in-documentation-comments': 'off',
    'unicorn/no-top-level-side-effects': 'off',
    'unicorn/prefer-default-parameters': 'off',
    'unicorn/single-line-block-comment-style': 'off',
  },
});

export const recommended = defineConfig(base, unicornConfig);
