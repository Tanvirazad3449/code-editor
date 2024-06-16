'use client';

import Editor from '@/components/organisms/Editor';
import Sidebar from '@/components/organisms/Sidebar';
import { DirectoryTreeProvider } from '@/contexts/DirectoryTreeContext';
import React, { useState } from 'react';

const ResizableColumns: React.FC = () => {
  const [leftWidth, setLeftWidth] = useState<number>(20);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const newLeftWidth = (e.clientX / window.innerWidth) * 100;
    if (newLeftWidth >= 20 && newLeftWidth <= 40) {
      setLeftWidth(newLeftWidth);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <DirectoryTreeProvider>
      <div className="flex h-screen">
        <div
          className="bg-blue-500"
          style={{ width: `${leftWidth}%` }}
        >
          <Sidebar />
        </div>
        <div
          className="bg-gray-500 cursor-col-resize"
          onMouseDown={handleMouseDown}
          style={{ width: '2px' }}
        ></div>
        <div
          className="bg-green-500 flex-1"
          style={{ width: `${100 - leftWidth}%` }}
        >
          <Editor />
        </div>
      </div>
    </DirectoryTreeProvider>
  );
};

export default ResizableColumns;
