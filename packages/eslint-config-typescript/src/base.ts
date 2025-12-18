import eslint from '@eslint/js';
import type { Linter } from 'eslint';
import { configs as deMorganConfigs } from 'eslint-plugin-de-morgan';
import { configs as eslintDependConfig } from 'eslint-plugin-depend';
import { configs as importConfigs } from 'eslint-plugin-import-x';
import { configs as perfectionistConfigs } from 'eslint-plugin-perfectionist';
import { configs as sonarConfigs } from 'eslint-plugin-sonarjs';
import { defineConfig } from 'eslint/config';
import { configs as tsEslintConfigs } from 'typescript-eslint';

//General eslint recommended rules
const eslintConfig = defineConfig(eslint.configs.recommended, {
  rules: {
    /** Code quality rules */
    //Enforce default clauses in switch statements to be last
    'default-case-last': 'warn',
    //Disallow nested ternary expressions
    'no-nested-ternary': 'warn',
    //Prefer the arrow callback of ES6 where possible
    'prefer-arrow-callback': 'warn',
  },
});

//General typescript-eslint rules that have type knowledge
const typescriptEslintConfig = defineConfig(
  tsEslintConfigs.recommendedTypeChecked,
  tsEslintConfigs.stylisticTypeChecked,
  {
    rules: {
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
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { fixStyle: 'inline-type-imports', prefer: 'type-imports' },
      ],
      //We want to encourage marking type exports explicitly
      '@typescript-eslint/consistent-type-exports': ['warn', { fixMixedExportsWithInlineTypeSpecifier: true }],
      //Enforce the use of top-level import type qualifer when an import only has specifiers with inline type qualifiers
      '@typescript-eslint/no-import-type-side-effects': 'warn',
    },
  },
);

//General code quality rules
const sonarConfig = defineConfig(sonarConfigs.recommended, {
  rules: {
    //Turning this rule off as it is handled by @typescript-eslint/no-unused-vars
    'sonarjs/no-unused-vars': 'off',
    //Turning this off as it is rather noisy and not that useful in practice
    'sonarjs/prefer-read-only-props': 'off',
    //Turning this rule off as developers should be allowed to tag things as TODO
    'sonarjs/todo-tag': 'off',
    //Turning this rule off so developers can use void expressions where appropriate like suggest by @typescript-eslint
    'sonarjs/void-use': 'off',
  },
});

//General sorting and import rules
const perfectionistConfig = defineConfig(perfectionistConfigs['recommended-natural'], {
  rules: {
    //Set up a specific import order that we generally want to adhere to.
    //This makes it easier to recognize where an import is coming from.
    'perfectionist/sort-imports': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
        ignoreCase: true,
        newlinesBetween: 0,
        order: 'asc',
        type: 'natural',
      },
    ],
    //Extend the default recommended rules to include comment partioning to allow for comments being used for explanatory purposes.
    ...Object.fromEntries(
      [
        'perfectionist/sort-array-includes',
        'perfectionist/sort-classes',
        'perfectionist/sort-enums',
        'perfectionist/sort-exports',
        'perfectionist/sort-interfaces',
        'perfectionist/sort-intersection-types',
        'perfectionist/sort-maps',
        'perfectionist/sort-named-exports',
        'perfectionist/sort-named-imports',
        'perfectionist/sort-object-types',
        'perfectionist/sort-objects',
        'perfectionist/sort-sets',
        'perfectionist/sort-union-types',
        'perfectionist/sort-variable-declarations',
      ].map((rule) => [rule, ['error', { partitionByComment: true, type: 'natural' }]]),
    ),
    //Turning this rule off as recommended in the perfectionist documention as it is handled by perfectionist in the following rules:
    //sort-interfaces:  https://perfectionist.dev/rules/sort-interfaces
    //sort-objects:  https://perfectionist.dev/rules/sort-object-types
    '@typescript-eslint/adjacent-overload-signatures': 'off',
    //Turning this rule off as recommended in the perfectionist documention as it is handled by perfectionist in the following rules:
    //sort-intersection-types: https://perfectionist.dev/rules/sort-intersection-types
    '@typescript-eslint/sort-type-constituents': 'off',
  },
});

//Additional import rules to enforce beyond the sorting rules provided by perfectionist
const importConfig = defineConfig(
  importConfigs['flat/recommended'] as Linter.Config,
  importConfigs['flat/typescript'] as Linter.Config,
  {
    rules: {
      'import-x/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
    },
  },
);

//De Morgan's law rules for simplifying boolean expressions
const demorganConfig = defineConfig(deMorganConfigs.recommended);

//Dependency guidance to migrate off other dependencies
const dependConfig = defineConfig(eslintDependConfig['flat/recommended']);

const disableTypeCheckedOnJS = defineConfig({
  extends: [tsEslintConfigs.disableTypeChecked],
  files: ['**/*.js', '**/*.[cm]js', '**/*.jsx'],
});

export const base = defineConfig(
  eslintConfig,
  typescriptEslintConfig,
  sonarConfig,
  perfectionistConfig,
  importConfig,
  demorganConfig,
  dependConfig,
  disableTypeCheckedOnJS,
);
