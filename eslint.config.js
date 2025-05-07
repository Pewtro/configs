import putstack from '@putstack/eslint-config-typescript';
import tseslint from 'typescript-eslint';

export default tseslint.config(
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
  putstack.configs.recommended,
  {
    //TODO: Remove this if/when we move to eslint-plugin-unicorn-x in a future major version of @putstack/eslint-config-typescript
    rules: {
      'depend/ban-dependencies': [
        'error',
        {
          allowed: ['eslint-plugin-unicorn'],
        },
      ],
    },
  },
);
