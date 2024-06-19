import { DirectoryTreeNodeType } from "@/entities/directory-tree";
import useDirectoryTree from "./useDirectoryTree";
import { resetAllActiveFileInDirectoryTree } from "@/utils/helpers/resetAllActiveFileInDirectoryTree";
import { getNewFile } from "@/utils/helpers/getNewFileNode";
import { getUpdatedDirectoryTreeWithNewItem } from "@/utils/helpers/getUpdatedDirectoryTreeWithNewItem";

const useCreateNewFile = () => {
    const { directoryTree, setDirectoryTree } = useDirectoryTree();

    const createNewFile = (newFileName: string, parentFolder?: DirectoryTreeNodeType) => {
        const newFile = getNewFile(newFileName)

        let updatedDirectory = resetAllActiveFileInDirectoryTree(directoryTree)
        let updatedChildren = resetAllActiveFileInDirectoryTree(parentFolder?.children || [])
        let newDirectoryTree;
        if (parentFolder) {
            const updatedFolder = { 
                ...parentFolder, 
                children: [...(updatedChildren || []), newFile]
            };
            newDirectoryTree = getUpdatedDirectoryTreeWithNewItem(updatedDirectory, updatedFolder);
        } else {
            newDirectoryTree = [...updatedDirectory, newFile];
        }

        setDirectoryTree(newDirectoryTree);
    };

    return { createNewFile };
};

export default useCreateNewFile;
