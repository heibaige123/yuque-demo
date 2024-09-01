import type React from 'react';
import { useState } from 'react';
import { TreeItem } from './TreeItem';
import type { TreeFoldProps } from './interface';

function TreeFoldContent({
    treeChildren,
    treeFold,
}: {
    treeChildren: Required<TreeFoldProps>['treeChildren'];
    treeFold: boolean;
}) {
    return (
        <div className={['huo-tree-group', treeFold && 'hidden'].join(' ')}>
            {treeChildren.map((item) => (
                <TreeItem
                    key={item.id}
                    {...item}
                    isChild
                />
            ))}
        </div>
    );
}

export function TreeFold(props: TreeFoldProps): React.JSX.Element {
    const { treeChildren, ...resetProps } = props;

    const [treeFold, setTreeFold] = useState(true);

    function handleClick(fold: boolean) {
        setTreeFold(fold);
    }

    return (
        <div>
            <TreeItem
                {...resetProps}
                onClick={handleClick}
            />
            {treeChildren && treeChildren.length && (
                <TreeFoldContent
                    treeChildren={treeChildren}
                    treeFold={treeFold}
                />
            )}
        </div>
    );
}
