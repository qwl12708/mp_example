/*
 * Eslint config file
 * Documentation: https://eslint.org/docs/user-guide/configuring/
 * Install the Eslint extension before using this feature.
 */
module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  globals: {
    wx: true,
    App: true,
    Page: true,
    getCurrentPages: true,
    getApp: true,
    Component: true,
    requirePlugin: true,
    requireMiniProgram: true
  },
  plugins: ['prettier'],
  extends: ['prettier', 'plugin:prettier/recommended'],
  rules: {
    'comma-dangle': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-shadow': 1,
    'import/prefer-default-export': 0,
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'no-await-in-loop': 0,
    'no-console': 0,
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_'
      }
    ],
    'object-curly-newline': [
      'error',
      {
        ExportDeclaration: { minProperties: 5 }
      }
    ],
    'no-unused-expressions': 0,
    'no-nested-ternary': 1,
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: false
      }
    ],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'arrow-parens': 0,
    'consistent-return': 0,
    'no-return-assign': 0,
    'implicit-arrow-linebreak': 0
  }
};
