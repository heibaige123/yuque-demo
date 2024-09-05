import { EditorCore } from './EditorCore';

export const Editor: React.FC = () => {
    return (
        <div className='huo-full px-20 py-10'>
            <div className='huo-full shadow-2xl rounded-2xl py-5'>
                <EditorCore />
            </div>
        </div>
    );
};
