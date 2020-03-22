const javaScriptConfig = {
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-prototype-builtins': 'off',
    'prettier/prettier': 'error',
  },
  env: {
    node: true,
    browser: false,
    es6: true,
    jest: false,
  },
};

const typeScriptConfig = {
  files: ['**/*.ts'],
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 'off',
  },
  env: {
    node: true,
    browser: false,
    jest: false,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};

const testsConfig = {
  ...typeScriptConfig,
  files: ['**/*.test.ts'],
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'jest', 'prettier'],
  rules: {
    'no-restricted-globals': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
  },
  env: {
    node: true,
    browser: false,
    jest: true,
  },
};

module.exports = {
  ...javaScriptConfig,
  overrides: [typeScriptConfig, testsConfig],
};
