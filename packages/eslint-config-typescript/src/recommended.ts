import unicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import { base } from './base';

const unicornConfig = defineConfig(unicorn.configs.recommended);

export const recommended = defineConfig(base, unicornConfig);
