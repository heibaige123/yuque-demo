import type React from 'react';
import { Editor } from '../../editor/Editor';

export function Content(): React.JSX.Element {
    return (
        <div className='h-full'>
            <div className='flex h-full'>
                <Editor />
            </div>
        </div>
    );
}
