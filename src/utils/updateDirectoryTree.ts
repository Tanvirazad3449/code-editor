import { DirectoryTreeItem } from "@/entities/directory-tree";

export function setActiveFileInDirectoryTree(items: DirectoryTreeItem[], fileId: string): DirectoryTreeItem[] {
    return items.map(i => {
        if (i.id === fileId) {
            return { ...i, isSelected: true };
        }

        if (i.children && i.children.length > 0) {
            return { ...i, children: setActiveFileInDirectoryTree(i.children, fileId) };
        }

        return { ...i, isSelected: false };
    });
}

export function getActiveFileInDirectoryTree(items: DirectoryTreeItem[]):DirectoryTreeItem | undefined {
    for (let item of items) {
        if (item.isSelected === true) {
            return item;
        }
        if (item.children && item.children.length > 0) {
            const foundInChildren = getActiveFileInDirectoryTree(item.children);
            if (foundInChildren) {
                return foundInChildren;
            }
        }
    }
    return undefined; 
}

export function getUpdatedDirectoryTree(items: DirectoryTreeItem[], updatedFile: DirectoryTreeItem): DirectoryTreeItem[] {
    return items.map(i => {
        if (i.id === updatedFile.id) {
            return { ...i, value: updatedFile.value };
        }

        if (i.children && i.children.length > 0) {
            return { ...i, children: getUpdatedDirectoryTree(i.children, updatedFile) };
        }

        return i
    });
}