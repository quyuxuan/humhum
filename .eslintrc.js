module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  globals: {},
  plugins: [
    '@typescript-eslint',
  ],
  ignorePatterns: [
    'dist',
    'build',
    'scripts',
    'config',
    '*.html',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'camelcase': 'off',
    'comma-dangle': 'off',
    'handle-callback-err': 'off',
    'no-unused-vars': 'off',
    'quote-props': 'off',
    'no-extra-semi': 'off',
    'prefer-promise-reject-errors': 'off',
    'prefer-const': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { 'functions': false, }],
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  }
}
