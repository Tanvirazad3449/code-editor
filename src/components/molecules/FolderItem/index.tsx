'use client'

import FileItem from "../FileItem";
import { KeyboardEvent, useRef, useState } from "react";
import HoverableButton from "@/components/atoms/HoverableButton";
import { DirectoryTreeNodeType } from "@/entities/directory-tree";
import useCreateNewFile from "@/hooks/useCreateNewFile";
import useCreateNewFolder from "@/hooks/useCreateNewFolder";

interface FolderProps {
    folderItem: DirectoryTreeNodeType;
}

const FolderItem: React.FC<FolderProps> = ({ folderItem }) => {
    const {createNewFolder} = useCreateNewFolder()
    const {createNewFile} = useCreateNewFile()

    const [isExpanded, setIsExpanded] = useState(false)
    const [shouldCreateNewFile, setShouldCreateNewFile] = useState(false)
    const [newItemName, setNewItemName] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);

    const handleCreateNewItem = (type:'file'|'folder') => {
        setIsExpanded(true)
        setShouldCreateNewFile(type === 'file')
        if (inputRef.current) {
            inputRef.current.hidden = false;
            inputRef.current.focus();
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewItemName(event.target.value);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key == 'Enter') {
            event.preventDefault();
            shouldCreateNewFile ? createNewFile(newItemName, folderItem) : createNewFolder(newItemName, folderItem)
            if (inputRef.current) {
                inputRef.current.hidden = true;
                inputRef.current.blur();
            }
            setNewItemName("")
        }

        if (event.key == 'Escape') {
            event.preventDefault();
            if (inputRef.current) {
                inputRef.current.hidden = true;
                inputRef.current.blur();
            }
            setNewItemName("")
        }
    };

    return (
        <div className="border-l border-gray-800">
            <HoverableButton
                title={folderItem.name}
                onAddFile={()=>handleCreateNewItem('file')}
                onAddFolder={()=>handleCreateNewItem('folder')}
                isExpanded={isExpanded}
                toggleExpand={() => setIsExpanded(!isExpanded)}
            />
            {isExpanded &&
                <div className="pl-2">
                    {folderItem?.children?.map((item, index) => (
                        item.type === 'folder' ? (
                            <FolderItem key={index} folderItem={item} />
                        ) : (
                            <FileItem key={index} item={item} />
                        )
                    ))}
                </div>
            }
        <input placeholder='New Item...' onKeyDown={handleKeyDown} hidden={true} ref={inputRef} value={newItemName} onChange={handleInputChange} className="bg-slate-700 text-white h-8 w-full px-2" />
        </div>
    )

};

export default FolderItem