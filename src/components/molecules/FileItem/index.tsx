'use client'

import FileItemNode from "@/components/atoms/FileItemNode";
import { DirectoryTreeNodeType } from "@/entities/directory-tree";
import useDirectoryTree from "@/hooks/useDirectoryTree";
import { setActiveFileInDirectoryTree } from "@/utils/helpers/setActiveFileInDirectoryTree";
import icons from "@/utils/icons";

export interface FileItemProps {
    item: DirectoryTreeNodeType;
}
const FileItem: React.FC<FileItemProps> = ({ item }) => {
    const ChevronRightIcon = icons['file']
    const { directoryTree, setDirectoryTree } = useDirectoryTree();

    const handleClick = () => {
        const modifiedItems = setActiveFileInDirectoryTree(directoryTree, item.id);
        setDirectoryTree(modifiedItems)
    };

    return (
        <FileItemNode file={item} handleClick={handleClick}/>
    );
};

export default FileItem