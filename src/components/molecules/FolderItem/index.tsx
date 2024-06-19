
'use client'

import FileItem from "../FileItem";
import { useState } from "react";
import HoverableButton from "@/components/atoms/HoverableButton";
import { DirectoryTreeNodeType } from "@/entities/directory-tree";
import NewItemInput from "../NewItemInput";
import useCreateNewItem from "@/hooks/useCreateNewItem";

interface FolderProps {
    folderItem: DirectoryTreeNodeType;
}
const FolderItem: React.FC<FolderProps> = ({ folderItem }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const { isVisible, createNewItemType, setIsVisible, handleCreateNewItem } = useCreateNewItem();

    return (
        <div className="border-l border-gray-800">
            <HoverableButton
                title={folderItem.name}
                onAddFile={() => {
                    setIsExpanded(true)
                    handleCreateNewItem('file')
                }}
                onAddFolder={() => {
                    setIsExpanded(true)
                    handleCreateNewItem('folder')
                }}
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

            <NewItemInput
                itemType={createNewItemType}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                targetDirectory={folderItem}
            />

        </div>
    )

};

export default FolderItem