export interface TreeItemProps {
    fileName?: string;
    icon?: string;
    isChild?: boolean;
    onClick?: (fold: boolean) => void;
    id: string;
}

export interface TreeFoldProps extends TreeItemProps {
    treeChildren?: TreeItemProps[];
}
