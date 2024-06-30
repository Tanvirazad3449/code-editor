import React from 'react';
import icons from '@/utils/icons';
import Tooltip from '@mui/material/Tooltip';

type IconButtonProps = {
    type: 'file-add' | 'folder-add' | 'keyboard-shortcuts' | 'delete' | 'rename';
    onClick: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({ type, onClick }) => {
    const IconComponent = icons[type];
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const getTooltipContent = (type: string) => {
        switch (type) {
            case 'file-add':
                return 'Add File';
            case 'folder-add':
                return 'Add Folder';
            case 'keyboard-shortcuts':
                return 'Keyboard Shortcuts';
            case 'delete':
                return 'Delete';
            case 'rename':
                return 'Rename';
            default:
                return '';
        }
    };

    return (
        <div>
            <Tooltip title={getTooltipContent(type)}>

            <button name={type} role='button' onClick={handleClick} className="cursor-pointer h-10 w-10 hover:bg-slate-600 items-center justify-center flex">
                <IconComponent size={16}/>
            </button>
            </Tooltip>
        </div>
    );
};

export default IconButton;

