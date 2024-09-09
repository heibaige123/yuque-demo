import { useAtom } from 'jotai';
import { ThemeMenu, themeSelect } from '../store';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~renderer/shadcn-ui';
import React from 'react';
import { CommonProps } from '../interface';

interface ThemeProps {
    themeChange: CommonProps['themeChange'];
}

export const ThemeSelect: React.FC<ThemeProps> = ({ themeChange }) => {
    const [theme, setTheme] = useAtom(themeSelect);

    return (
        <Select
            value={theme}
            onValueChange={(theme) => {
                setTheme(theme);
                themeChange(theme);
            }}
        >
            <SelectTrigger className='w-[180px]  focus:ring-0 focus:ring-offset-0'>
                <SelectValue placeholder={theme} />
            </SelectTrigger>
            <SelectContent>
                {ThemeMenu.map((item) => (
                    <SelectItem
                        key={item.key}
                        value={item.value}
                    >
                        {item.value}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};
