'use client';

import IconButton from "@/components/atoms/IconButton";
interface SidebarHeaderProps {
    handleCreateNewItem: (itemType: 'file' | 'folder') => void;
}
export default function SidebarHeader({handleCreateNewItem}:SidebarHeaderProps) {

    return (
        <div className="text-white py-4 px-6 sticky top-0 z-10 flex items-center justify-between border-b-2 border-gray-700 h-16">
            <p>Code Editor</p>
            <div className="flex items-center">
            <IconButton type="file-add" onClick={()=>handleCreateNewItem('file')}/>
            <IconButton type="folder-add" onClick={()=>handleCreateNewItem('folder')}/>
            </div>
        </div>
    );
}
