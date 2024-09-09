import {
    joinStyles,
    cx,
    omitExtraAttributes,
    ProsemirrorNode,
    ApplySchemaAttributes,
    DOMOutputSpec,
} from '@remirror/core';
import { renderCodeBlockHeader } from './components/code-block-header';
import { CommonProps } from './interface';

const LANGUAGE_ATTRIBUTE = 'data-code-block-language';

export function codeBlockToDOM({
    node,
    extra,
    languageChange,
    themeChange,
}: {
    node: ProsemirrorNode;
    extra: ApplySchemaAttributes;
} & Omit<CommonProps, 'initLanguage'>): DOMOutputSpec {
    const { language, wrap } = omitExtraAttributes(node.attrs, extra);
    const { style: _, ...extraAttrs } = extra.dom(node);
    let style = extraAttrs.style;

    if (wrap) {
        style = joinStyles({ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }, style);
    }

    const attributes = {
        spellcheck: 'false',
        ...extraAttrs,
        class: cx(extraAttrs.class, `language-${language}`),
    };

    renderCodeBlockHeader({
        elementName: 'huo-code-block-header',
        languageChange,
        themeChange,
        initLanguage: language as string,
    });

    return [
        'div',
        {
            class: 'huo-code-block',
        },
        [
            'huo-code-block-header',
            {
                class: 'huo-code-block-header',
            },
        ],
        [
            'pre',
            attributes,
            [
                'code',
                {
                    [LANGUAGE_ATTRIBUTE]: language,
                    style,
                },
                0,
            ],
        ],
    ];
}
