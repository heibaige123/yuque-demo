import React from 'react';
import styleHref from '~renderer/assets/style/index.scss?url';

/**
 * Render custom element
 *  custom element 引入全局样式
 */
export const RenderCustomElement: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    return (
        <>
            <link
                rel='stylesheet'
                href={styleHref}
            />
            {children}
        </>
    );
};
