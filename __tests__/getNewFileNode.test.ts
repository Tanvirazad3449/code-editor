// Import the function to be tested
import { DirectoryTreeNodeType } from "@/entities/directory-tree";
import { getNewFile } from "@/utils/helpers/getNewFileNode";

// Mock uuidv4 function (assuming you're using Jest)
jest.mock('uuid', () => ({
    v4: () => 'mock-uuid' // Replace with a mock UUID as needed
}));

describe('getNewFile function', () => {
    it('should return a new file object with the provided name', () => {
        const fileName = 'testFile.txt';
        const expectedFile: DirectoryTreeNodeType = {
            id: 'mock-uuid', // Mocked UUID
            type: 'file',
            name: fileName,
            value: '',
            isSelected: true
        };

        const newFile = getNewFile(fileName);

        expect(newFile).toEqual(expectedFile);
    });

    // Add more test cases as needed
});
