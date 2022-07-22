const zones = require('./zones.json');

module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-restricted-paths': ['error', { zones }],
    'no-console': 'error',
  },
};
