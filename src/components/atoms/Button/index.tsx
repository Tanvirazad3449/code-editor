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
        <button onClick={handleClick} className="cursor-pointer h-10 w-10 hover:text-gray-200 items-center justify-center flex">
            <p>{label}</p>
        </button>
    )
};

export default Button;
