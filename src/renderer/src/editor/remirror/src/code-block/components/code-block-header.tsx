import * as React from 'react';
import r2wc from '@r2wc/react-to-web-component';
import { TitleInput } from './title-input';
import { LanguageSelect } from './language-select';
import { ThemeSelect } from './theme-select';

import style from '~renderer/assets/style/index.scss?url';

const CodeBlockHeaderCore: React.FC = () => {
    return (
        <div className='flex justify-between cursor-pointer'>
            <link
                rel='stylesheet'
                href={style}
            />
            <TitleInput />
            <LanguageSelect />
            <ThemeSelect />
        </div>
    );
};

export function renderCodeBlockHeader(elementName: string = 'code-block-header') {
    if (customElements.get(elementName)) {
        return;
    }

    const CodeBlockHeader = r2wc(CodeBlockHeaderCore, {
        shadow: 'open',
    });

    customElements.define(elementName, CodeBlockHeader);
}
