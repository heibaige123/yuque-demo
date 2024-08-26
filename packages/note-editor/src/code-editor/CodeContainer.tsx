import type React from 'react';
import { useState } from 'react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@huo-note/shadcn-ui';
import { TitleInput } from './TitleInput';
import { LanguageSelect } from './LanguageSelect';
import { ThemeSelect } from './ThemeSelect';

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
                <div className="flex justify-between cursor-pointer">
                    <div onClick={handleClick}>
                        <span
                            className={
                                `w-10 h-10
                                ${open
                                    ? 'icon-[uil--scroll]'
                                    : 'icon-[uis--direction]'
                                }
                                `
                            }
                        />
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
