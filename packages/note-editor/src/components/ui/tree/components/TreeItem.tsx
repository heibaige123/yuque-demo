import React, { useMemo } from 'react';
import type { TreeItemProps } from './interface';

export function TreeItem(props: TreeItemProps): React.JSX.Element {
    const { fileName, isChild, onClick } = props;
    const [fold, setFold] = React.useState(true);

    function handleClick() {
        setFold(!fold);
        onClick?.(!fold);
    }

    const fileInfo = useMemo(() => {
        if (fileName) {
            return {
                text: fileName,
                color: 'text-slate-800',
            };
        }

        return {
            text: 'undefined',
            color: 'text-gray-400',
        };
    }, [fileName]);

    return (
        <div
            className={
                [
                    'group',
                    'flex select-none',
                    'min-h-7 px-[8px] py-[5px]',
                    'cursor-pointer rounded-md',
                    'hover:bg-slate-200',
                ].join(' ')
            }
            {...(fold
                ? {}
                : { 'data-expanded': '' }
            )}
        >
            <div
                className={[
                    'flex',
                    isChild && 'pl-3',
                ].join(' ')}
            >
                <div
                    onClick={handleClick}
                    className="
                        cursor-pointer
                        flex items-center justify-center
                        rounded-sm
                        hover:bg-slate-300
                    "
                >
                    <TreeItemIcon />
                </div>

                <div className="ml-1">
                    <span className={fileInfo.color}>
                        {fileInfo.text}
                    </span>
                </div>
            </div>
        </div>
    );
}

function TreeItemIcon(): React.JSX.Element {
    return (
        <span
            className={[
                'text-gray-400 w-4 h-4',
                'transition-transform duration-75 group-data-[expanded]:rotate-90',
                'icon-[eva--arrow-right-fill]',
            ].join(' ')}
        />

    );
}
