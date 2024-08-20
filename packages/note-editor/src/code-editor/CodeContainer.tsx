import type React from 'react';
import { useState } from 'react';
import { TitleInput } from './TitleInput';
import { LanguageSelect } from './LanguageSelect';
import { ThemeSelect } from './ThemeSelect';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/shadcn-ui';

export function CodeContainer({
    children,
}: {
    children?: React.ReactNode;
}): React.JSX.Element {
    const [open, setOpen] = useState(true);

    function handleClick() {
        setOpen(open => !open);
    }

    return (
        <Collapsible open={open}>
            <CollapsibleTrigger asChild>
                <div className="flex justify-between">
                    <div onClick={handleClick}>
                        {
                            open
                                ? (
                                        <div
                                            className="i-fluent-mdl2:chevron-fold-10"
                                        />
                                    )
                                : (
                                        <div
                                            className="i-fluent-mdl2:chevron-unfold-10"
                                        />
                                    )
                        }
                    </div>

                    <TitleInput />
                    <LanguageSelect />
                    <ThemeSelect />
                </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
                {children}
            </CollapsibleContent>
        </Collapsible>
    );
}
