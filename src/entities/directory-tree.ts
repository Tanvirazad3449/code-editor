export type DirectoryTreeNodeType = {
    id: string;
    type: 'folder' | 'file';
    name: string;
    children?: DirectoryTreeNodeType[];
    value?:string;
    isSelected?:boolean;
};


export type DirectoryTreeContextType = {
    directoryTree: DirectoryTreeNodeType[];
    setDirectoryTree: (newValue: DirectoryTreeNodeType[]) => void;
};

export const defaultDirectoryTreeItem: DirectoryTreeNodeType = {
    id: '',
    type: 'file',
    name: '',
    value: '',
    isSelected: false
};