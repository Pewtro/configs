import { configs as putstackConfigs } from '@putstack/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  env: {
    browser: true,
    builtin: true,
    es2024: true,
    node: true,
  },
  extends: [putstackConfigs.recommended],
  ignorePatterns: ['**/coverage/**', '**/dist/**', '**/node_modules/**', '**/build/**'],
  options: {
    typeAware: true,
  },
});
