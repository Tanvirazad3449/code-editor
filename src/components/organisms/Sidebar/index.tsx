'use client'

import SidebarContent from '@/components/molecules/SidebarContent';
import SidebarHeader from '@/components/molecules/SidebarHeader';
import useCreateNewFile from "@/hooks/useCreateNewFile";
import useCreateNewFolder from "@/hooks/useCreateNewFolder";
import { KeyboardEvent, useRef, useState } from "react";

export default function Sidebar() {
  const { createNewFolder } = useCreateNewFolder()
  const { createNewFile } = useCreateNewFile()

  const [shouldCreateNewFile, setShouldCreateNewFile] = useState(false)
  const [newItemName, setNewItemName] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCreateNewItem = (type: 'file' | 'folder') => {
    setShouldCreateNewFile(type === 'file')
    if (inputRef.current) {
      inputRef.current.hidden = false;
      inputRef.current.focus();
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter') {
      event.preventDefault();
      shouldCreateNewFile ? createNewFile(newItemName) : createNewFolder(newItemName)
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItemName(event.target.value);
  };
  return (
    <div className="h-screen flex flex-col bg-gray-950">
      <SidebarHeader handleCreateNewItem={handleCreateNewItem} />
        <input placeholder='New Item...' onKeyDown={handleKeyDown} hidden={true} ref={inputRef} value={newItemName} onChange={handleInputChange} className=" bg-slate-700 text-white h-8 px-2 mx-4 mt-4" />
      <SidebarContent />
    </div>
  );
};

