import { DirectoryTreeNodeType } from "@/entities/directory-tree";

export function getActiveFileInDirectoryTree(items: DirectoryTreeNodeType[]):DirectoryTreeNodeType | undefined {
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