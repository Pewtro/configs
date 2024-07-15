import unicorn from 'eslint-plugin-unicorn';
import { config } from 'typescript-eslint';
import { base } from './base';

const unicornConfig = config(unicorn.configs['flat/recommended']);

export const recommended = config(...base, ...unicornConfig);
