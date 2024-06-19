import { DirectoryTreeNodeType } from "@/entities/directory-tree";

export function getUpdatedDirectoryTreeWithNewItem(items: DirectoryTreeNodeType[], modifiedTree: DirectoryTreeNodeType): DirectoryTreeNodeType[] {

    return items.map(i => {
        if (i.id === modifiedTree.id) {
            return modifiedTree
        }

        if (i.children && i.children.length > 0) {
            return { ...i, children: getUpdatedDirectoryTreeWithNewItem(i.children, modifiedTree) };
        }

        return {...i, isSelected: false}
    });
}
