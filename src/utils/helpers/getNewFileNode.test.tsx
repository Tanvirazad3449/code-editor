// Import the function to be tested
import { DirectoryTreeNodeType } from "@/entities/directory-tree";
import { getNewFile } from "@/utils/helpers/getNewFileNode";
import '@testing-library/jest-dom'

jest.mock('uuid', () => ({
    v4: () => 'mock-uuid'
}));

describe('getNewFile function', () => {
    it('should return a new file object with the provided name', () => {
        const fileName = 'testFile.txt';
        const expectedFile: DirectoryTreeNodeType = {
            id: 'mock-uuid',
            type: 'file',
            name: fileName,
            value: '',
            isSelected: true
        };
        const newFile = getNewFile(fileName);
        expect(newFile).toEqual(expectedFile);
    });

    it('should return a new file even if input fileName is empty', () => {
        const fileName = '';
        const expectedFile: DirectoryTreeNodeType = {
            id: 'mock-uuid',
            type: 'file',
            name: fileName,
            value: '',
            isSelected: true
        };
        const newFile = getNewFile(fileName);
        expect(newFile).toEqual(expectedFile);
    });

});
