'use client'

import { DirectoryTreeContext } from "@/contexts/DirectoryTreeContext";
import { useContext } from "react";

const useDirectoryTree = () => {
    const context = useContext(DirectoryTreeContext);
    if (context === undefined) {
        throw new Error('useDirectoryTree must be used within a ActiveFileProvider');
    }
    return context;
};

export default useDirectoryTree