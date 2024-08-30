import antfu from '@antfu/eslint-config';

export default antfu({
    react: true,
    stylistic: {
        indent: 4,
        quotes: 'single',
        semi: true,
        whitespace: true,
        commaDangle: 'never',
        maxLineLength: 100,
        importOrder: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    },
    typescript: {
        overrides: {
            'no-console': 'off',
            'ts/strict-boolean-expressions': 'off',
            'no-under-init': 'off',
            'max-len': ['error', {
                code: 120,
            }],
            'import/order': ['error', {
                'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'never',
            }],
        },
    },
    ignores: [
        '**/*.yml',
        '**/*.yaml',
        'src/renderer/src/shadcn-ui/**/*.{ts,tsx}',
        'out/**/*',
        'dist/**/*',
        'node_modules/**/*',
        'build/**/*',
        'resources/**/*',
        '.vscode/**/*',
        '.husky/**/*',
    ],
});
