'use client'

import useDirectoryTree from "@/hooks/useDirectoryTree";
import FileItem from "../FileItem";
import FolderItem from "../FolderItem";

const SidebarContent: React.FC = () => {
    const {directoryTree} = useDirectoryTree()

    return (
        <div className="flex-1 overflow-auto">
            <div className="h-full overflow-auto p-4">
            {directoryTree.map((item, index) => (
                item.type === 'folder' ? (
                    <FolderItem key={index} folderItem={item} />
                ) : (
                    <FileItem key={index} item={item}/>
                )
            ))}
            </div>
        </div>
    );
}

export default SidebarContent
