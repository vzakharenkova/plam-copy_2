module.exports = {
  root: true,
  files: ['*.ts', '*.tsx'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: path.join(__dirname, 'plam'),
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'airbnb-base', 'prettier'],
  rules: {},
};
