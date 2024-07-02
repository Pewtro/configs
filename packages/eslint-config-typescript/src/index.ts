import type { TSESLint } from '@typescript-eslint/utils';
import baseConfig from './base';
import recommendedConfig from './recommended';

type ConfigTypes = 'base' | 'recommended';

const configs: Record<ConfigTypes, TSESLint.FlatConfig.ConfigArray> = {
  base: baseConfig,
  recommended: recommendedConfig,
};

export { configs };
export default { configs };
