import React from 'react';

type ButtonProps = {
    label: string;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return(
        <button onClick={handleClick} className="cursor-pointer h-10 hover:bg-gray-600 items-center justify-center flex">
            <p className="px-4">{label}</p>
        </button>
    )
};

export default Button;
