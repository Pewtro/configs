module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'progress', 'sonarjs'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:sonarjs/recommended',
  ],
  rules: {
    /** ESLint plugin configuration */
    //Turns on the progress printout
    'progress/activate': 1,

    /** Stylistic rules */
    //Prefer using Array<T> over T[]
    '@typescript-eslint/array-type': ['warn', { default: 'generic', readonly: 'generic' }],

    /** Code quality rules */
    //Enforce default clauses in switch statements to be last
    'default-case-last': 'warn',
    //Disallow duplicate imports
    'no-duplicate-imports': 'warn',
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
  },
  env: {
    browser: true,
    node: true,
  },
};
