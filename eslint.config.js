import { configs as putstackConfigs } from '@putstack/eslint-config-typescript';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  {
    ignores: ['**/coverage/**', '**/dist/**', '**/node_modules/**', '**/build/**'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  putstackConfigs.recommended,
);
