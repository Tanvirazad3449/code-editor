'use client'

import Button from "@/components/atoms/Button";
import { DirectoryTreeItem, defaultDirectoryTreeItem } from "@/entities/directory-tree";
import { useActiveFileContext } from "@/hooks/useActiveFileContext";
import { getActiveFileInDirectoryTree, getUpdatedDirectoryTree } from "@/utils/updateDirectoryTree";
import { useEffect, useState } from "react";

export default function EditorContent() {
    const { value, setValue } = useActiveFileContext();
    const [inputValue, setInputValue] = useState("");
    const [currentFile, setCurrentFile] = useState<DirectoryTreeItem>(defaultDirectoryTreeItem);


    useEffect(() => {
        const fileItem = getActiveFileInDirectoryTree(value)
        if (fileItem) {
            setInputValue(fileItem?.value || "")
            setCurrentFile(fileItem)
        }
    }, [value])

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        const newDirectoryTree = getUpdatedDirectoryTree(value, { ...currentFile, value: inputValue })
        setValue(newDirectoryTree)
    };

    return (
        <>
            {currentFile?.isSelected === true ?
                <div className="w-full">
                    <div className="text-white py-4 px-6 sticky top-0 z-10 flex items-center justify-end border-b-2 border-gray-700">
                       <div className="flex items-center">
                            <Button label="Save" onClick={handleClick} />
                        </div>
                        
                    </div>

                    <textarea
                        value={inputValue}
                        onChange={handleInputChange}
                        rows={20}
                        cols={50}
                        placeholder="Enter new value here..."
                        className={inputValue === currentFile.value ? "w-full text-white bg-gray-800 p-4" : "w-full text-yellow-400 bg-gray-800 p-4"}
                    />
                </div>
                :
                <div className="w-full h-full flex text-white items-center justify-center justify-items-center">
                    <p>Select a file to edit</p>
                </div>
            }
        </>
    );
}
