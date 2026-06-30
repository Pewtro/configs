import type { OxlintConfig } from 'oxlint';
import { base } from './base';
import { recommended } from './recommended';

type ConfigTypes = 'base' | 'recommended';

const configs: Record<ConfigTypes, OxlintConfig> = {
  base,
  recommended,
};

export { configs };
export default { configs };
