import { Input } from '@huo-note/shadcn-ui';

export function TitleInput(): React.JSX.Element {
    return (
        <div>
            <Input
                placeholder="请输入代码块标题"
                className="text-lg"
            />
        </div>
    );
}
