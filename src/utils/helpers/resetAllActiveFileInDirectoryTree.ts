import { DirectoryTreeNodeType } from "@/entities/directory-tree";

export function resetAllActiveFileInDirectoryTree(items: DirectoryTreeNodeType[]): DirectoryTreeNodeType[] {
    return items.map(i => {
        if(i.type == 'file'){
            return { ...i, isSelected: false };
        }
        if (i.children && i.children.length > 0) {
            return { ...i, children: resetAllActiveFileInDirectoryTree(i.children) };
        }
        return i
    });
}