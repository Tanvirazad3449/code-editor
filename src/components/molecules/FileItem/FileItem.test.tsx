import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import FileItem from '.';
import { DirectoryTreeNodeType } from '@/entities/directory-tree';
import useDirectoryTree from '@/hooks/useDirectoryTree';
import * as updateDirectoryTree from '@/utils/updateDirectoryTree';

// Mock the useDirectoryTree hook
jest.mock('@/hooks/useDirectoryTree');

const mockItem: DirectoryTreeNodeType = {
  id: '1',
  type: 'file',
  name: 'Test File',
  isSelected: false,
};

describe('FileItem component', () => {
  let renderResult: RenderResult;
  let setDirectoryTreeMock: jest.Mock;

  beforeEach(() => {
    setDirectoryTreeMock = jest.fn();
    (useDirectoryTree as jest.Mock).mockReturnValue({
      directoryTree: [mockItem],
      setDirectoryTree: setDirectoryTreeMock,
    });
    renderResult = render(<FileItem item={mockItem} />);
  });

  it('renders file item correctly', () => {
    const { getByText } = renderResult;
    
    const fileNameElement = getByText('Test File');
    expect(fileNameElement).toBeInTheDocument();
  });

  it('handles click event correctly', () => {
    const { getByText } = renderResult;
    
    // Mock the setActiveFileInDirectoryTree function
    jest.spyOn(updateDirectoryTree, 'setActiveFileInDirectoryTree').mockReturnValue([mockItem]);

    const fileItem = getByText('Test File').parentElement!;
    fireEvent.click(fileItem);

    expect(setDirectoryTreeMock).toHaveBeenCalled();
    expect(updateDirectoryTree.setActiveFileInDirectoryTree).toHaveBeenCalledWith([mockItem], '1');
  });
});
