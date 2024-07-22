//TODO Delete the declarations once the packages are updated to include the types

//Should be in v55.0.0 from https://github.com/sindresorhus/eslint-plugin-unicorn/commit/68e0f133c2316537a339cb6c7b12eac6105386b6
declare module 'eslint-plugin-unicorn' {
  import type { Linter } from 'eslint';

  const configs: Record<'flat/recommended', Required<Linter.FlatConfig>>;

  export default {
    configs,
  };
}
