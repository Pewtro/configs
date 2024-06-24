import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';
import baseconfig from './base/index.js';

const configs = {
  base: baseconfig,
  recommended: tseslint.config(...baseconfig, unicorn.configs['flat/recommended']),
};

export default { configs };
