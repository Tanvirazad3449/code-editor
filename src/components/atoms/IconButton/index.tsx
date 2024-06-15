import icons from '@/utils/icons';
import React from 'react';

type IconButtonProps = {
    type: 'file-add' | 'folder-add';
    onClick: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({ type, onClick }) => {
    console.log("icons: ", icons)
    const IconComponent = icons[type];
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return(
        <button onClick={handleClick} className="cursor-pointer h-10 w-10 hover:bg-slate-700 items-center justify-center flex">
            <IconComponent size={20}/>
        </button>
    )
};

export default IconButton;
