import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
    {
        files: ['./src/**/*.{js,ts,jsx,tsx}'],
        ...tseslint.configs.recommended,
        ...pluginJs.configs.recommended,
        eslintPluginPrettierRecommended,
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
];
