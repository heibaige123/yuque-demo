import { atom } from 'jotai';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import type { LanguageSupport } from '@codemirror/language';

const LanguageConfig: Record<
    string,
    {
        value: string;
        languageSupport: LanguageSupport;
    }
> = {
    javascript: {
        value: 'javascript',
        languageSupport: javascript({
            jsx: true,
            typescript: true,
        }),
    },
    css: {
        value: 'css',
        languageSupport: css(),
    },
    html: {
        value: 'html',
        languageSupport: html(),
    },
};

export const LanguageMenu = Object.keys(LanguageConfig).map((key) => ({
    key,
    ...LanguageConfig[key],
}));

export const languageSelect = atom<keyof typeof LanguageConfig>('javascript');

export const readonlyLanguageSupport = atom((get) => {
    const language = get(languageSelect);
    return LanguageConfig[language].languageSupport;
});
