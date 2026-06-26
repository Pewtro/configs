import { configs as putstackConfigs } from '@putstack/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [putstackConfigs.recommended],
  ignorePatterns: ['**/coverage/**', '**/dist/**', '**/node_modules/**', '**/build/**'],
});
