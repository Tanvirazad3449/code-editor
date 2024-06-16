import { DirectoryTreeNodeType } from "@/entities/directory-tree";
import useDirectoryTree from "./useDirectoryTree";
import { v4 as uuidv4 } from 'uuid';
import { getUpdatedDirectoryTreeWithNewItem, resetAllActiveFileInDirectoryTree, setActiveFileInDirectoryTree } from "@/utils/updateDirectoryTree";

const useCreateNewFile = () => {
    const { directoryTree, setDirectoryTree } = useDirectoryTree();

    const createNewFile = (newFileName: string, parentFolder?: DirectoryTreeNodeType) => {
        const uniqueId = uuidv4();
        const newFile: DirectoryTreeNodeType = {
            id: uniqueId,
            type: 'file',
            name: newFileName,
            value: '',
            isSelected: true
        };

        let newD = resetAllActiveFileInDirectoryTree(directoryTree)
        let newChildren = resetAllActiveFileInDirectoryTree(parentFolder?.children || [])
        let newDirectoryTree;
        if (parentFolder) {
            const updatedFolder = { 
                ...parentFolder, 
                children: [...(newChildren || []), newFile]
            };
            newDirectoryTree = getUpdatedDirectoryTreeWithNewItem(newD, updatedFolder);
        } else {
            newDirectoryTree = [...newD, newFile];
        }

        setDirectoryTree(newDirectoryTree);
    };

    return { createNewFile };
};

export default useCreateNewFile;
