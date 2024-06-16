import icons from '@/utils/icons';
import React from 'react';

type IconButtonProps = {
    type: 'file-add' | 'folder-add' | 'keyboard-shortcuts';
    onClick: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({ type, onClick }) => {
    const IconComponent = icons[type];
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return(
        <button onClick={handleClick} className="cursor-pointer h-10 w-10 hover:bg-slate-600 items-center justify-center flex">
            <IconComponent size={20}/>
        </button>
    )
};

export default IconButton;
