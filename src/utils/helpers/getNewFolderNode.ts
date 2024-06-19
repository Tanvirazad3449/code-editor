import { DirectoryTreeNodeType } from "@/entities/directory-tree";
import { v4 as uuidv4 } from 'uuid';

export function getNewFolderNode(name:string): DirectoryTreeNodeType{
    const uniqueId = uuidv4();

    return {
        id: uniqueId,
        type: 'folder',
        name: name,
        children: []
    }
}

