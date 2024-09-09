import { atom } from 'jotai';

const LanguageConfig: Record<
    string,
    {
        value: string;
    }
> = {
    javascript: {
        value: 'javascript',
    },
    typescript: {
        value: 'typescript',
    },
    css: {
        value: 'css',
    },
    html: {
        value: 'html',
    },
    json: {
        value: 'json',
    },
    jsx: {
        value: 'jsx',
    },
    markdown: {
        value: 'markdown',
    },
};

export const LanguageMenu = Object.keys(LanguageConfig).map((key) => ({
    key,
    ...LanguageConfig[key],
}));

export const languageSelect = atom<keyof typeof LanguageConfig>('javascript');
