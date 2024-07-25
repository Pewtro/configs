import type { TSESLint } from '@typescript-eslint/utils';
import { base } from './base';
import { recommended } from './recommended';

type ConfigTypes = 'base' | 'recommended';

const configs: Record<ConfigTypes, TSESLint.FlatConfig.ConfigArray> = {
  base,
  recommended,
};

export { configs };
export default { configs };
