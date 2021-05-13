module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react', 'prettier', 'react-hooks'],
    rules: {
        'prettier/prettier': 'error',
        'no-unused-vars': 'off',
        'react/prop-types': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    },
    globals: {
        document: true,
        window: true,
        require: true,
        _: true
    }
};
