import type { TSESLint } from '@typescript-eslint/utils';
import { baseLegacyConfig } from './legacy-base';

export const recommendedLegacyConfig: TSESLint.ClassicConfig.Config = {
  ...baseLegacyConfig,
  extends: [...(baseLegacyConfig.extends as Array<string>), 'plugin:unicorn/recommended'],
};
