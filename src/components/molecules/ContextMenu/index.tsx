// src/ContextMenu.tsx

import React, { useState, MouseEvent, ReactNode } from 'react';

interface Position {
  x: number;
  y: number;
}

interface ContextMenuProps {
  children: ReactNode;
  menuItems: { label: string, onClick: () => void }[];
}

const ContextMenu: React.FC<ContextMenuProps> = ({ children, menuItems }) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState<Position>({ x: 0, y: 0 });

  const handleContextMenu = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setMenuPosition({ x: event.pageX, y: event.pageY });
    setMenuVisible(true);
  };

  const handleClick = () => {
    setMenuVisible(false);
  };

  return (
    <div onContextMenu={handleContextMenu} onClick={handleClick} style={{ position: 'relative' }}>
      {children}
      {menuVisible && (
        <ul
          style={{
            position: 'absolute',
            top: menuPosition.y,
            left: menuPosition.x,
            listStyleType: 'none',
            padding: '10px',
            backgroundColor: 'white',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            zIndex: 1000
          }}
        >
          {menuItems.map((item, index) => (
            <li key={index} onClick={item.onClick} style={{ cursor: 'pointer', padding: '5px 10px' }} className='hover:bg-slate-700'>
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContextMenu;
