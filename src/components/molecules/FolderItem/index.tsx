'use client'

import icons from "@/utils/icons";
import FileItem from "../FileItem";
import { useState } from "react";

interface FolderProps {
    title: string;
    children: Array<any>;
}

const FolderItem: React.FC<FolderProps> = ({ title, children }) => {
    const ChevronRightIcon = icons['chevron-right']
    const ChevronDownIcon = icons['chevron-down']

    const [isExpanded, setIsExpanded] = useState(false)
    if (isExpanded) {
        return (
            <>
                <div className="flex items-center justify-start text-white m-1 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ?
                        <ChevronDownIcon size={20} className="text-gray-500 mr-2" />
                        :
                        <ChevronRightIcon size={20} className="text-gray-500 mr-2" />
                    }
                    <p>{title}</p>
                </div>
                <div className="pl-8">
                    {children.map((item, index) => (
                        item.type === 'folder' ? (
                            <FolderItem key={index} title={item.name} children={item.children} />
                        ) : (
                            <FileItem key={index} item={item}/>
                        )
                    ))}
                </div>
            </>
        )
    }
    return (
        <div className="flex items-center justify-start text-white m-1 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
            <ChevronRightIcon size={20} className="text-gray-500 mr-2" />
            <p>{title}</p>
        </div>
    );
};

export default FolderItem