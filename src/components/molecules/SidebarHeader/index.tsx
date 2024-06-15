'use client';

import IconButton from "@/components/atoms/IconButton";

export default function SidebarHeader() {

    return (
        <div className="text-white py-4 px-6 sticky top-0 z-10 flex items-center justify-between border-b-2 border-gray-700">
            <p>Code Editor</p>
            <div className="flex items-center">
            <IconButton type="file-add" onClick={()=>console.log('file adddd')}/>
            <IconButton type="folder-add" onClick={()=>console.log('folder addddd')}/>

            </div>
        </div>
    );
}
