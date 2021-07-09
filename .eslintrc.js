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
  plugins: ['testing-library', '@typescript-eslint', 'prettier'],
  extends: ['eslint:recommended', 'next'],
  rules: {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
