/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    plugins: [
        'vue'
    ],
    rules: {
        'no-var': 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'quotes': [ 2, 'single' ],
        'eqeqeq': [ 'error', 'always' ],
        'semi': [ 2, 'never' ],
        'indent': [ 'error', 4 ],
        'comma-dangle': [ 'error', 'never' ],
        'spaced-comment': [ 'error', 'always' ],
        'space-before-blocks': 'error',
        'key-spacing': 'error',
        'no-multiple-empty-lines': [ 'error', { 'max': 1, 'maxBOF': 1 } ],
        'object-curly-spacing': [ 'error', 'always' ],
        'array-bracket-spacing': [ 'error', 'always' ],

        'vue/html-indent': [ 'error', 4 ],
        'vue-multi/word-component-names': 'off'
    }
}
