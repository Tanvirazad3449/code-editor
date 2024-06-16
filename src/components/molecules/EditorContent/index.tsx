'use client'

import Button from "@/components/atoms/Button";
import { DirectoryTreeNodeType, defaultDirectoryTreeItem } from "@/entities/directory-tree";
import useDirectoryTree from "@/hooks/useDirectoryTree";
import { getActiveFileInDirectoryTree, getUpdatedDirectoryTree } from "@/utils/updateDirectoryTree";
import { KeyboardEvent, useEffect, useState } from "react";
import EditorHeader from "../EditorHeader";

export default function EditorContent() {
    const { directoryTree, setDirectoryTree } = useDirectoryTree();
    const [inputValue, setInputValue] = useState("");
    const [currentFile, setCurrentFile] = useState<DirectoryTreeNodeType>(defaultDirectoryTreeItem);

    useEffect(() => {
        const fileItem = getActiveFileInDirectoryTree(directoryTree)
        if (fileItem) {
            setInputValue(fileItem?.value || "")
            setCurrentFile(fileItem)
        }
    }, [directoryTree])

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
    };

    const handleSave = () => {
        const newDirectoryTree = getUpdatedDirectoryTree(directoryTree, { ...currentFile, value: inputValue })
        setDirectoryTree(newDirectoryTree)
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if ((event.metaKey || event.ctrlKey) && event.key === 's') {
            event.preventDefault();
            handleSave();
        }
    };

    return (
        <>
            {currentFile?.isSelected === true ?
                <div className="w-full">
                    <EditorHeader handleSave={handleSave} hasUnsavedChanges={inputValue !== currentFile.value}/>
                    <textarea
                        onKeyDown={handleKeyDown}
                        value={inputValue}
                        onChange={handleInputChange}
                        rows={20}
                        cols={50}
                        placeholder="Enter your file content..."
                        className={"w-full text-white bg-gray-800 p-4"}
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
