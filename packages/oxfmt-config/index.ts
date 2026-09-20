import type { OxfmtConfig } from 'oxfmt';

const config: OxfmtConfig = {
  endOfLine: 'lf',
  ignorePatterns: ['**/coverage/**', '**/dist/**', '**/node_modules/**', '**/build/**'],
  printWidth: 120,
  singleQuote: true,
  sortPackageJson: true,
};

export default config;
