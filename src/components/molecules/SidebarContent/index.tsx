'use client'

import { useActiveFileContext } from "@/hooks/useActiveFileContext";
import FileItem from "../FileItem";
import FolderItem from "../FolderItem";

const SidebarContent: React.FC = () => {
    const {value} = useActiveFileContext()
    return (
        <div className="flex-1 overflow-y-auto">
            <div className="h-full overflow-y-auto p-4">
            {value.map((item, index) => (
                item.type === 'folder' ? (
                    <FolderItem key={index} title={item.name} children={item.children || []} />
                ) : (
                    <FileItem key={index} item={item}/>
                )
            ))}
            </div>
        </div>
    );
}

export default SidebarContent
