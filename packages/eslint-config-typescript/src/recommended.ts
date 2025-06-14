import unicorn from 'eslint-plugin-unicorn';
import { config } from 'typescript-eslint';
import { base } from './base';

//@ts-expect-error Temporary issue with typescript-eslint
const unicornConfig = config(unicorn.configs.recommended);

export const recommended = config(base, unicornConfig);
