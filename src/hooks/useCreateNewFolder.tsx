import { DirectoryTreeNodeType } from "@/entities/directory-tree";
import useDirectoryTree from "./useDirectoryTree";
import { v4 as uuidv4 } from 'uuid';
import { getUpdatedDirectoryTreeWithNewItem } from "@/utils/updateDirectoryTree";

const useCreateNewFolder = () => {
    const { directoryTree, setDirectoryTree } = useDirectoryTree();

    const createNewFolder = (newFolderName: string, parentFolder?: DirectoryTreeNodeType) => {
        const uniqueId = uuidv4();
        const newFolder: DirectoryTreeNodeType = {
            id: uniqueId,
            type: 'folder',
            name: newFolderName,
            children: []
        };

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
