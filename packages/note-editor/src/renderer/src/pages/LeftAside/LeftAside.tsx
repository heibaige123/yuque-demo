import { getUniqueId } from '@huo-note/huo-note-utils';
import { TreeFold, TreeItem } from '@/components/ui/tree';
import type { TreeFoldProps } from '@/components/ui/tree/components/interface';

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

export function LeftAside(): React.JSX.Element {
    return (
        <div
            className="
                w-full
                h-full
                bg-slate-50
                huo-border
                border-r
                border-y
                rounded-md
                p-5
            "
        >
            <TreeItem id={id} />

            <TreeFold {...treeDemo} />
            <TreeFold {...treeDemo} />
            <TreeFold {...treeDemo} />
            <TreeFold {...treeDemo} />
        </div>
    );
}
