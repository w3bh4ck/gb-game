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
    'no-unreachable': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
