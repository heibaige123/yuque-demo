import { useAtom } from 'jotai';
import { ThemeMenu, themeSelect } from './store';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/shadcn-ui';

export function ThemeSelect() {
    const [theme, setTheme] = useAtom(themeSelect);

    return (
        <Select
            value={theme}
            onValueChange={theme => setTheme(theme)}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={theme} />
            </SelectTrigger>
            <SelectContent>
                {
                    ThemeMenu.map(item => (
                        <SelectItem key={item.key} value={item.value}>
                            {item.value}
                        </SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    );
}
