module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', '@gapizza/eslint-config', 'plugin:import/typescript'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': ['error', { args: 'after-used', ignoreRestSiblings: true, vars: 'all' }],
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.json'],
      },
      typescript: {},
    },
  },
};
