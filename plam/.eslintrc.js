module.exports = {
  env: {
    browser: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: './',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'airbnb-base', 'prettier'],
  rules: {},
};
