import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';
import baseconfig from './base/index.js';
import packageJson from './package.json' with { type: 'json' };

const configs = {
  base: baseconfig,
  recommended: tseslint.config(...baseconfig, unicorn.configs['flat/recommended']),
};

export default { configs, name: packageJson.name, version: packageJson.version };
