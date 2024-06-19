import icons from '@/utils/icons';
import React from 'react';

type IconProps = {
    type: 'add-new';
};

const Icon: React.FC<IconProps> = ({ type }) => {
    const IconComponent = icons[type];
    return (
        <div className='h-10 w-10'>
            <IconComponent size={20} color='white'/>
        </div>
    )
};

export default Icon;
