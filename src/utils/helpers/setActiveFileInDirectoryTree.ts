import { DirectoryTreeNodeType } from "@/entities/directory-tree";

export function setActiveFileInDirectoryTree(items: DirectoryTreeNodeType[], fileId: string): DirectoryTreeNodeType[] {
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
