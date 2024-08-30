import { useAtom } from 'jotai';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@huo-note/shadcn-ui';
import { ThemeMenu, themeSelect } from './store';

export function ThemeSelect() {
    const [theme, setTheme] = useAtom(themeSelect);

    return (
        <Select
            value={theme}
            onValueChange={theme => setTheme(theme)}
        >
            <SelectTrigger className="w-[180px]  focus:ring-0 focus:ring-offset-0">
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
