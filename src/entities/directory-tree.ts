export type DirectoryTreeItem = {
    id: string;
    type: 'folder' | 'file';
    name: string;
    children?: DirectoryTreeItem[];
    value?:string;
    isSelected?:boolean;
};


export type DirectoryTreeContext = {
    value: DirectoryTreeItem[];
    setValue: (newValue: DirectoryTreeItem[]) => void;
};

export const defaultDirectoryTreeItem: DirectoryTreeItem = {
    id: '',
    type: 'file',
    name: '',
    value: '',
    isSelected: false
};