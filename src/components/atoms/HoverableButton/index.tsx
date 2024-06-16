// src/components/molecules/HoverableButton.tsx
import React, { useState } from 'react';
import IconButton from '@/components/atoms/IconButton';
import icons from '@/utils/icons';

interface HoverableButtonProps {
    title: string;
    onAddFile: () => void;
    onAddFolder: () => void;
    isExpanded: boolean;
    toggleExpand: () => void;
}

const HoverableButton: React.FC<HoverableButtonProps> = ({ title, onAddFile, onAddFolder, isExpanded, toggleExpand }) => {
    const [isHovered, setIsHovered] = useState(false);
    const ChevronRightIcon = icons['chevron-right'];
    const ChevronDownIcon = icons['chevron-down'];

    return (
        <div
            className="flex items-center justify-between text-white cursor-pointer hover:bg-slate-800"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div onClick={toggleExpand} className="flex items-center justify-start h-10 flex-1">
                {isExpanded ? <ChevronDownIcon size={20} className="text-gray-500 mr-2" /> : <ChevronRightIcon size={20} className="text-gray-500 mr-2" />}
                <p>{title}</p>
            </div>
            {isHovered &&
                <div className="flex items-center justify-evenly">
                    <IconButton type="file-add" onClick={onAddFile} />
                    <IconButton type="folder-add" onClick={onAddFolder} />
                </div>
            }
        </div>
    );
};

export default HoverableButton;
