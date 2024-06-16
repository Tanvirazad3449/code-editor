'use client'

import { DirectoryTreeNodeType } from "@/entities/directory-tree";
import useDirectoryTree from "@/hooks/useDirectoryTree";
import icons from "@/utils/icons";
import { setActiveFileInDirectoryTree } from "@/utils/updateDirectoryTree";

interface FileItemProps {
    item: DirectoryTreeNodeType;
}
const FileItem: React.FC<FileItemProps> = ({ item }) => {
    const ChevronRightIcon = icons['file']
    const { directoryTree, setDirectoryTree } = useDirectoryTree();

    const handleClick = () => {
        const modifiedItems = setActiveFileInDirectoryTree(directoryTree, item.id);
        setDirectoryTree(modifiedItems)
        console.log('Modified items: ', modifiedItems);
    };

    return (
        <div className={item.isSelected ? "flex items-center justify-start text-white bg-slate-800 cursor-pointer p-1 h-10 border-l border-gray-800" : "flex items-center justify-start text-white cursor-pointer hover:bg-slate-800 p-1 h-10 border-l border-gray-800"} onClick={handleClick}>
            <ChevronRightIcon size={20} className="text-gray-500 mr-2" />
            <p>{item.name}</p>
        </div>
    );
};

export default FileItem