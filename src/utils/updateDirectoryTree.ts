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

export function getUpdatedDirectoryTree(items: DirectoryTreeNodeType[], updatedFile: DirectoryTreeNodeType): DirectoryTreeNodeType[] {
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


export function getUpdatedDirectoryTreeWithNewItem(items: DirectoryTreeNodeType[], modifiedTree: DirectoryTreeNodeType): DirectoryTreeNodeType[] {
    console.log("this is the newD inside getUpdatedDirectoryTreeWithNewItem----", items)

    return items.map(i => {
        if (i.id === modifiedTree.id) {
            return modifiedTree
        }
        console.log(items)

        if (i.children && i.children.length > 0) {
            return { ...i, children: getUpdatedDirectoryTreeWithNewItem(i.children, modifiedTree) };
        }

        return {...i, isSelected: false}
    });
}