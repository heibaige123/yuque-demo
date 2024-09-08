import { Input } from '~renderer/shadcn-ui';

export function TitleInput(): React.JSX.Element {
    return (
        <div>
            <Input
                placeholder='请输入代码块标题'
                className='text-lg  focus-visible:ring-0 focus-visible:ring-offset-0'
            />
        </div>
    );
}
