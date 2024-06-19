import { DirectoryTreeNodeType } from "@/entities/directory-tree";
import useDirectoryTree from "./useDirectoryTree";
import { getUpdatedDirectoryTreeWithNewItem } from "@/utils/helpers/getUpdatedDirectoryTreeWithNewItem";
import { getNewFolderNode } from "@/utils/helpers/getNewFolderNode";

const useCreateNewFolder = () => {
    const { directoryTree, setDirectoryTree } = useDirectoryTree();

    const createNewFolder = (newFolderName: string, parentFolder?: DirectoryTreeNodeType) => {
        const newFolder = getNewFolderNode(newFolderName)

        let newDirectoryTree;
        if (parentFolder) {
            const updatedFolder = { 
                ...parentFolder, 
                children: [...(parentFolder.children || []), newFolder]
            };
            newDirectoryTree = getUpdatedDirectoryTreeWithNewItem(directoryTree, updatedFolder);
        } else {
            newDirectoryTree = [...directoryTree, newFolder];
        }

        setDirectoryTree(newDirectoryTree);
    };

    return { createNewFolder };
};

export default useCreateNewFolder;
