import { DirectoryTreeNodeType } from "@/entities/directory-tree";

export function getUpdatedDirectoryTreeWithFileContent(items: DirectoryTreeNodeType[], updatedFile: DirectoryTreeNodeType): DirectoryTreeNodeType[] {
    return items.map(i => {
        if (i.id === updatedFile.id) {
            return { ...i, value: updatedFile.value };
        }

        if (i.children && i.children.length > 0) {
            return { ...i, children: getUpdatedDirectoryTreeWithFileContent(i.children, updatedFile) };
        }

        return i
    });
}
