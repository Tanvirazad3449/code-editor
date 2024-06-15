'use client'

import { DirectoryTreeContext, DirectoryTreeItem } from '@/entities/directory-tree';
import React, { createContext, useState, ReactNode } from 'react';


const dir:DirectoryTreeItem[] = [
    {
        id: '1',
        type: 'folder',
        name: '1',
        children: [
            {
                id: '2',
                type: 'folder',
                name: '1-1',
                children: [
                    {
                        id: '3',
                        type: 'file',
                        name: '1-1-1',
                        value: 'content of file 1-1-1'
                    },
                    {
                        id: '6',
                        type: 'file',
                        name: '1-1-2',
                        value: 'content of file 1-1-2'
                    }
                ]
            },
            {
                id: '4',
                type: 'file',
                name: '1-2',
                value: 'content of file 1-2-1'
            }
        ]
    },
    {
        id: '5',
        type: 'file',
        name: '2',
        value: 'content of file 2'
    }
]

export const ActiveFileContext = createContext<DirectoryTreeContext | undefined>(undefined);

export const ActiveFileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
 
    const [value, setValue] = useState<DirectoryTreeItem[]>(dir);

    return (
        <ActiveFileContext.Provider value={{ value, setValue }}>
            {children}
        </ActiveFileContext.Provider>
    );
};
