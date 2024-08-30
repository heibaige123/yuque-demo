import { useAtom } from 'jotai';
import { LanguageMenu, languageSelect } from './store';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '~renderer/shadcn-ui';

export function LanguageSelect() {
    const [language, setLanguage] = useAtom(languageSelect);

    return (
        <Select
            value={language}
            onValueChange={language => setLanguage(language)}
        >
            <SelectTrigger className="w-[180px] focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder={language} />
            </SelectTrigger>
            <SelectContent>
                {
                    LanguageMenu.map(item => (
                        <SelectItem key={item.key} value={item.value}>
                            {item.value}
                        </SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    );
}
