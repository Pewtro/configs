import unicorn from 'eslint-plugin-unicorn';
import { config } from 'typescript-eslint';
import baseConfig from './base';

const unicornConfig = config(unicorn.configs['flat/recommended']);

const combinedFlatConfig = config(...baseConfig, ...unicornConfig);

export default combinedFlatConfig;
