module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'progress', 'sonarjs'],
  extends: [
    //General eslint recommended rules
    'eslint:recommended',
    //General typescript-eslint rules that have type knowledge
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    //General code quality rules
    'plugin:sonarjs/recommended',
    //General import rules
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    /** ESLint plugin configuration */
    //Turns on the progress printout
    'progress/activate': 1,

    /** Stylistic rules */
    //Prefer using Array<T> over T[]
    '@typescript-eslint/array-type': ['warn', { default: 'generic', readonly: 'generic' }],
    //We want to encourage marking type imports explicitly which is also enforced by TypeScripts --verbatimModuleSyntax
    '@typescript-eslint/consistent-type-imports': 'warn',
    //We want to encourage marking type exports explicitly
    '@typescript-eslint/consistent-type-exports': 'warn',
    //Enforce the use of top-level import type qualifer when an import only has specifiers with inline type qualifiers
    '@typescript-eslint/no-import-type-side-effects': 'warn',
    //We want to encourage the import type specifiers to be consistent
    'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
    //Set up a specificer import that we generally want to adhere to to make it easier recognizing where an import is coming from
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'unknown'],
        'newlines-between': 'never',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    /** Code quality rules */
    //Enforce default clauses in switch statements to be last
    'default-case-last': 'warn',
    //Disallow nested ternary expressions
    'no-nested-ternary': 'warn',

    /** Rules that need to be turned off in default eslint to be turned on in Typescript ESLint */
    //Enforce default parameters to be last
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'warn',
    //Disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    //Disallow variable redeclaration
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'warn',

    //Emulate the TypeScript style of exempting names starting with _
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  //Default settings to fit simple projects, but should be overridden by users who want/need more control
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
