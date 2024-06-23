import eslint from '@eslint/js';
import perfectionistAlphabetical from 'eslint-plugin-perfectionist/configs/recommended-alphabetical';
import sonar from 'eslint-plugin-sonarjs';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  //General eslint recommended rules
  eslint.configs.recommended,
  //General typescript-eslint rules that have type knowledge
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  //General code quality rules
  sonar.configs.recommended,
  //General sorting and import rules
  perfectionistAlphabetical,
  {
    rules: {
      /** Code quality rules */
      //Enforce default clauses in switch statements to be last
      'default-case-last': 'warn',
      //Disallow nested ternary expressions
      'no-nested-ternary': 'warn',

      /** Rules that need to be turned off in default eslint to be turned on in Typescript ESLint */
      //Enforce default parameters to be last
      '@typescript-eslint/default-param-last': 'warn',
      'default-param-last': 'off',
      //Disallow variable declarations from shadowing variables declared in the outer scope
      '@typescript-eslint/no-shadow': 'warn',
      'no-shadow': 'off',
      //Disallow variable redeclaration
      '@typescript-eslint/no-redeclare': 'warn',
      'no-redeclare': 'off',

      //Emulate the TypeScript style of exempting names starting with _
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        },
      ],

      /** Stylistic rules */
      //Prefer using Array<T> over T[]
      '@typescript-eslint/array-type': ['warn', { default: 'generic', readonly: 'generic' }],
      //We want to encourage marking type imports explicitly which is also enforced by TypeScripts --verbatimModuleSyntax
      '@typescript-eslint/consistent-type-imports': 'warn',
      //We want to encourage marking type exports explicitly
      '@typescript-eslint/consistent-type-exports': 'warn',
      //Enforce the use of top-level import type qualifer when an import only has specifiers with inline type qualifiers
      '@typescript-eslint/no-import-type-side-effects': 'warn',

      //Set up a specific import order that we generally want to adhere to.
      //This makes it easier to recognize where an import is coming from.
      'perfectionist/sort-imports': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'unknown'],
          'ignore-case': true,
          'newlines-between': 'never',
          order: 'asc',
          type: 'alphabetical',
        },
      ],
      //If we have a list of objects, we want to sort them alphabetically, but we want to partition them by comments
      'perfectionist/sort-objects': [
        'error',
        {
          'partition-by-comment': true,
        },
      ],
      //Turning this rule off as recommended in the perfectionist documention as it is handled by perfectionist in the following rules:
      //sort-interfaces: https://eslint-plugin-perfectionist.azat.io/rules/sort-interfaces
      //sort-objects: https://eslint-plugin-perfectionist.azat.io/rules/sort-object-types
      '@typescript-eslint/adjacent-overload-signatures': 'off',
    },
  },
  {
    extends: [tseslint.configs.disableTypeChecked],
    files: ['**/*.js', '**/*.[cm]js', '**/*.jsx'],
  },
);
