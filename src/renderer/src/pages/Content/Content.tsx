import type React from 'react';
import { Editor } from '../../editor/Editor';

export const Content: React.FC = () => {
    return (
        <div className='h-full'>
            <div className='flex h-full'>
                <Editor />
            </div>
        </div>
    );
};
