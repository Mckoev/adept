module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        "plugin:jsx-a11y/recommended",
        'plugin:import/recommended',
        'airbnb',
        'prettier'
    ],
    overrides: [{
        files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
        rules: {
            'no-undef': 'off',
        },
    }],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
        "jsx-a11y/label-has-associated-control": ["error", {
            "required": {
                "some": ["nesting", "id"]
            }
        }],
        "jsx-a11y/label-has-for": ["error", {
            "required": {
                "some": ["nesting", "id"]
            }
        }]
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
