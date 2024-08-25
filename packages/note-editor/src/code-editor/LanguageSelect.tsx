import { useAtom } from 'jotai';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@huo-note/shadcn-ui';
import { LanguageMenu, languageSelect } from './store';

export function LanguageSelect() {
    const [language, setLanguage] = useAtom(languageSelect);

    return (
        <Select
            value={language}
            onValueChange={language => setLanguage(language)}
        >
            <SelectTrigger className="w-[180px]">
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
