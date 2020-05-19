module.exports = {
  env: {
    browser: true,
    es6: true,
    // amd: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/eslint-recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'html'],
  rules: {
    'no-unused-vars': [2],
    'no-var': [2],
    'no-extra-semi': [2],
  },
};
