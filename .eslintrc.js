const MAX_CHARS = 120;
const SPACES_PER_TAB = 4;
const MAX_NESTED_CALLBACKS = 3;
const MAX_PARAMS = 3;

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'vue',
    ],
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        'no-cond-assign': 'error',
        'no-console': 'warn',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-empty': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': 'error',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-negated-in-lhs': 'error',
        'no-obj-calls': 'error',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-unreachable': 'error',
        'use-isnan': 'error',
        'valid-jsdoc': 'error',
        'valid-typeof': 'error',
        'no-unexpected-multiline': 'error',
        curly: 'error',
        'default-case': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        eqeqeq: 'error',
        'no-alert': 'warn',
        'no-else-return': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-fallthrough': 'error',
        'no-magic-numbers': [
            'error',
            {
                ignoreDefaultValues: true,
                ignoreArrayIndexes: true,
                ignore: [0, 1, -1],
            },
        ],
        'no-multi-spaces': 'error',
        'no-delete-var': 'error',
        'no-undef': 'warn',
        'no-unused-vars': 'error',
        'no-use-before-define': 'warn',
        'array-bracket-spacing': ['error', 'never'],
        'block-spacing': ['error', 'never'],
        'brace-style': ['error', '1tbs', {allowSingleLine: true}],
        camelcase: 'error',
        'comma-spacing': ['error', {before: false, after: true}],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'consistent-this': ['error', 'self'],
        'eol-last': 'error',
        indent: 'error',
        'key-spacing': ['error', {beforeColon: false, afterColon: true}],
        'lines-around-comment': [
            'error',
            {beforeBlockComment: true, beforeLineComment: true, allowBlockStart: true},
        ],
        'linebreak-style': ['error', 'unix'],
        'max-nested-callbacks': ['error', MAX_NESTED_CALLBACKS],
        'new-cap': 'error',
        'new-parens': 'error',
        'no-array-constructor': 'error',
        'no-inline-comments': 'error',
        'no-lonely-if': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multiple-empty-lines': ['error', {max: 1}],
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-spaced-func': 'error',
        'no-trailing-spaces': 'error',
        'object-curly-spacing': ['error', 'never'],
        'one-var': ['error', 'never'],
        'operator-linebreak': ['error', 'before'],
        'quote-props': ['error', 'as-needed'],
        quotes: ['error', 'single', 'avoid-escape'],
        'semi-spacing': 'error',
        semi: ['error', 'always'],
        'sort-vars': 'error',
        'keyword-spacing': ['error', {before: true, after: true}],
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': ['error', {words: true, nonwords: false}],
        'spaced-comment': ['error', 'always', {block: {exceptions: ['-+*']}}],
        'no-var': 'error',
        'max-depth': 'error',
        'max-len': ['warn', MAX_CHARS, SPACES_PER_TAB],
        'max-params': ['error', MAX_PARAMS],
        'no-bitwise': 'error',
        'no-plusplus': 'warn',
    },
};
