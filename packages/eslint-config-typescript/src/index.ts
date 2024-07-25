import type { TSESLint } from '@typescript-eslint/utils';
import { base } from './base';
import { baseLegacyConfig } from './legacy-base';
import { recommended } from './recommended';

type ConfigTypes = 'base' | 'recommended';
type LegacyConfigTypes = 'legacy-base' | 'legacy-recommended';

const flatConfigs: Record<ConfigTypes, TSESLint.FlatConfig.ConfigArray> = {
  base,
  recommended,
};

const legacyConfigs: Record<LegacyConfigTypes, TSESLint.ClassicConfig.Config> = {
  'legacy-base': baseLegacyConfig,
  'legacy-recommended': baseLegacyConfig,
};

const configs = { ...flatConfigs, ...legacyConfigs };

export { configs };
export default { configs };
