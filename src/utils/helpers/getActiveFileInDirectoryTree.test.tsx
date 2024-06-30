// Import the function to be tested
import { DirectoryTreeNodeType } from "@/entities/directory-tree";
import { getActiveFileInDirectoryTree } from "@/utils/helpers/getActiveFileInDirectoryTree";
import '@testing-library/jest-dom'

describe('getActiveFileInDirectoryTree function', () => {
    // Test case: When there is an active file directly in the items array
    it('should return the active file node when it exists directly in items', () => {
        const items:DirectoryTreeNodeType[] = [
            { id: '1', type: 'file', name: 'File 1', isSelected: false },
            { id: '2', type: 'file', name: 'File 2', isSelected: true },
            { id: '3', type: 'file', name: 'File 3', isSelected: false }
        ];

        const activeFile = getActiveFileInDirectoryTree(items);

        expect(activeFile).toBeDefined();
        expect(activeFile?.id).toBe('2'); // Assuming 'File 2' is selected
    });

    // Test case: When there is an active file in nested children
    it('should return the active file node when it exists in nested children', () => {
        const items:DirectoryTreeNodeType[] = [
            {
                id: '1',
                type: 'folder',
                name: 'Folder 1',
                isSelected: false,
                children: [
                    { id: '2', type: 'file', name: 'File 2', isSelected: false },
                    {
                        id: '3',
                        type: 'file',
                        name: 'File 3',
                        isSelected: true
                    }
                ]
            }
        ];

        const activeFile = getActiveFileInDirectoryTree(items);

        expect(activeFile).toBeDefined();
        expect(activeFile?.id).toBe('3'); // Assuming 'File 3' is selected in nested children
    });

    // Test case: When there is no active file in the directory tree
    it('should return undefined when no active file is found', () => {
        const items:DirectoryTreeNodeType[] = [
            { id: '1', type: 'file', name: 'File 1', isSelected: false },
            { id: '2', type: 'file', name: 'File 2', isSelected: false }
        ];

        const activeFile = getActiveFileInDirectoryTree(items);

        expect(activeFile).toBeUndefined();
    });

    // Test case: When the directory tree is empty
    it('should return undefined for an empty directory tree', () => {
        const items:DirectoryTreeNodeType[] = [];

        const activeFile = getActiveFileInDirectoryTree(items);

        expect(activeFile).toBeUndefined();
    });
});
