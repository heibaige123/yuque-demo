import pluginJs from '@eslint/js';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    {
        files: ['./src/**/*.{js,ts,jsx,tsx}'],
        ...tseslint.configs.recommended,
        ...pluginJs.configs.recommended,
        pluginPrettierRecommended,
        ...pluginReact.configs.flat.recommended,
        ...pluginReactRefresh,
        ...pluginReactHooks.configs.recommended,
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2025,
                ...globals.worker,
            },
        },
    },
    {
        ignores: ['out', 'dist'],
    },
    {
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    },
];
