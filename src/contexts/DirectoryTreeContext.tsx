'use client'

import { DirectoryTreeContextType, DirectoryTreeNodeType } from '@/entities/directory-tree';
import React, { createContext, useState, ReactNode } from 'react';


const dir:DirectoryTreeNodeType[] = []

export const DirectoryTreeContext = createContext<DirectoryTreeContextType | undefined>(undefined);

export const DirectoryTreeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
 
    const [directoryTree, setDirectoryTree] = useState<DirectoryTreeNodeType[]>(dir);

    return (
        <DirectoryTreeContext.Provider value={{ directoryTree, setDirectoryTree }}>
            {children}
        </DirectoryTreeContext.Provider>
    );
};
