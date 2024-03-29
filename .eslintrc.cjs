/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/eslint-config-typescript'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    plugins: [
        'vue',
        'import',
        'unused-imports'
    ],
    rules: {
        'no-var': 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': 'error',
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
        'vue-multi/word-component-names': 'off',
        'vue/singleline-html-element-content-newline': 'off', // 要求单行元素的内容前后有一个换行符
        'vue/max-attributes-per-line': [ 'error', {
            'singleline': {
                max: 3
            },
            'multiline': {
                max: 1
            }
        } ],
        'vue/html-self-closing': [ 'error', {
            'html': {
                'normal': 'never',
                'void': 'always',
                'component': 'always'
            }
        } ],
        'unused-imports/no-unused-imports-ts': 'error',
        'vue/multi-word-component-names': 'off'
        // 'import/no-unused-modules': [ 2, { 'unusedExports': true } ],

    }

}
