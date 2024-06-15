'use client'

import { DirectoryTreeItem } from "@/entities/directory-tree";
import { useActiveFileContext } from "@/hooks/useActiveFileContext";
import icons from "@/utils/icons";
import { setActiveFileInDirectoryTree } from "@/utils/updateDirectoryTree";

interface FileItemProps {
    item: DirectoryTreeItem;
}
const FileItem: React.FC<FileItemProps> = ({ item }) => {
    const ChevronRightIcon = icons['file']
    const { value, setValue } = useActiveFileContext();

    const handleClick = () => {
        const modifiedItems = setActiveFileInDirectoryTree(value, item.id);
        setValue(modifiedItems)
        console.log('Modified items: ', modifiedItems);
    };

    return (
        <div className={item.isSelected ? "flex items-center justify-start text-white m-1 bg-slate-600 cursor-pointer" : "flex items-center justify-start text-white m-1 cursor-pointer hover:bg-slate-700"} onClick={handleClick}>
            <ChevronRightIcon size={20} className="text-gray-500 mr-2" />
            <p>{item.name}</p>
        </div>
    );
};

export default FileItem