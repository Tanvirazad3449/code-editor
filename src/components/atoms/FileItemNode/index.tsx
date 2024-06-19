import { DirectoryTreeNodeType } from '@/entities/directory-tree'
import icons from '@/utils/icons'
import React from 'react'

interface FileItemNodeProps {
    file: DirectoryTreeNodeType;
    handleClick: () => void;
}
function FileItemNode({ file, handleClick }: FileItemNodeProps) {
    const ChevronRightIcon = icons['file']

    return (
        <div className={file.isSelected ? "flex items-center justify-start text-white bg-slate-800 cursor-pointer p-1 h-10 border-l border-gray-800" : "flex items-center justify-start text-white cursor-pointer hover:bg-slate-800 p-1 h-10 border-l border-gray-800"} onClick={handleClick}>
            <ChevronRightIcon size={20} className="text-gray-500 mr-2" />
            <p>{file.name}</p>
        </div>
    )
}

export default FileItemNode