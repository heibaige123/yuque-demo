import * as React from 'react';
import r2wc from '@r2wc/react-to-web-component';
import { TitleInput } from './title-input';
import { LanguageSelect } from './language-select';
import { ThemeSelect } from './theme-select';
import { RenderCustomElement } from '~renderer/shadcn-ui';
import { CommonProps } from '../interface';

function CodeBlockHeaderCore({ themeChange, languageChange, initLanguage }: CommonProps) {
    return () => {
        return (
            <RenderCustomElement>
                <div className='flex justify-between cursor-pointer'>
                    <TitleInput />
                    <LanguageSelect
                        languageChange={languageChange}
                        initLanguage={initLanguage}
                    />
                    <ThemeSelect themeChange={themeChange} />
                </div>
            </RenderCustomElement>
        );
    };
}

export function renderCodeBlockHeader({
    elementName = 'code-block-header',
    themeChange,
    languageChange,
    initLanguage,
}: {
    elementName: string;
} & CommonProps) {
    if (customElements.get(elementName)) {
        return;
    }

    const CodeBlockHeader = r2wc(
        CodeBlockHeaderCore({
            languageChange,
            themeChange,
            initLanguage,
        }),
        {
            shadow: 'open',
        },
    );

    customElements.define(elementName, CodeBlockHeader);
}
