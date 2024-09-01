import { getUniqueId } from '@/utils';
import { TreeFold, TreeItem } from '~renderer/components';
import type { TreeFoldProps } from '~renderer/components/tree/components/interface';

const id = getUniqueId();

const treeDemo: TreeFoldProps = {
    fileName: 'demo',
    id: getUniqueId(),

    treeChildren: [
        {
            fileName: 'demo1',
            id: getUniqueId(),
        },
        {
            fileName: 'demo2',
            id: getUniqueId(),
        },
        {
            fileName: 'demo3',
            id: getUniqueId(),
        },
        {
            fileName: 'demo4',
            id: getUniqueId(),
        },
    ],
};

export const LeftAside: React.FC = () => {
    return (
        <div
            className='
                w-full
                h-full
                bg-slate-50
                huo-border
                border-r
                border-y
                rounded-md
                p-5
            '
        >
            <TreeItem id={id} />

            <TreeFold {...treeDemo} />
            <TreeFold {...treeDemo} />
            <TreeFold {...treeDemo} />
            <TreeFold {...treeDemo} />
        </div>
    );
};
