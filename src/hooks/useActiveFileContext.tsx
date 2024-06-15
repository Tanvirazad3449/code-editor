'use client'

import { ActiveFileContext } from "@/contexts/ActiveFileContext";
import { useContext } from "react";

export const useActiveFileContext = () => {
    const context = useContext(ActiveFileContext);
    if (context === undefined) {
        throw new Error('useActiveFileContext must be used within a ActiveFileProvider');
    }
    return context;
};
