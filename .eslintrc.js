module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    env: {
      browser: true,
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react-hooks', 'testing-library', '@typescript-eslint', 'prettier'],
  extends: [
    'react-app',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:testing-library/react',
    'plugin:testing-library/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
  ],
  rules: {
    'no-empty': 'warn',
    'no-console': 'warn',
    'no-func-assign': 'error',
    'no-invalid-regexp': 1,
    'no-unreachable': 'error',
    'no-unused-vars': 'error',
    'jsx-a11y/href-no-hash': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
