import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
    {
        files: ['./src/**/*.{js,ts,jsx,tsx}'],
        ...pluginReact.configs.flat.recommended,
        ...tseslint.configs.recommended,
        ...pluginJs.configs.recommended,
        eslintPluginPrettierRecommended,
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
