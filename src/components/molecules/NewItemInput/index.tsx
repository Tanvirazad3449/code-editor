import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { DirectoryTreeNodeType } from '@/entities/directory-tree';
import useCreateNewFile from '@/hooks/useCreateNewFile';
import useCreateNewFolder from '@/hooks/useCreateNewFolder';

interface NewItemInputProps {
    itemType: 'folder' | 'file';
    isVisible: boolean;
    setIsVisible: (visible: boolean) => void;
    targetDirectory?: DirectoryTreeNodeType;
}

const NewItemInput: React.FC<NewItemInputProps> = ({ itemType, isVisible, setIsVisible, targetDirectory }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { createNewFolder } = useCreateNewFolder();
    const { createNewFile } = useCreateNewFile();
    const [itemName, setItemName] = useState('');

    useEffect(() => {
        if (isVisible && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isVisible]);

    const createNewItem = () => {
        if (itemType === 'file') {
            createNewFile(itemName, targetDirectory);
        } else {
            createNewFolder(itemName, targetDirectory);
        }
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' || event.key === 'Escape') {
            event.preventDefault();
            if (event.key === 'Enter') {
                createNewItem()
            }
            if (inputRef.current) {
                inputRef.current.blur();
            }
            setItemName('');
            setIsVisible(false);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemName(event.target.value);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className='border-slate-700 border-l'>
            <input
                ref={inputRef}
                type="text"
                value={itemName}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder={`Enter new ${itemType} name`}
                className="w-full px-4 py-2 border border-slate-700 bg-slate-700 focus:outline-none focus:border-slate-700 text-white"
            />
        </div>
    );
};

export default NewItemInput;
