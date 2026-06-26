import type { defineConfig } from 'oxlint';
import { base } from './base';
import { recommended } from './recommended';
type ConfigTypes = 'base' | 'recommended';

const configs: Record<ConfigTypes, ReturnType<typeof defineConfig>> = {
  base,
  recommended,
};

export { configs };
export default { configs };
