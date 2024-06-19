// FileItemNode.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { DirectoryTreeNodeType } from '@/entities/directory-tree';
import FileItemNode from '.';

const meta: Meta<typeof FileItemNode> = {
  title: 'Components/FileItemNode',
  component: FileItemNode,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    handleClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof FileItemNode>;

const file: DirectoryTreeNodeType = {
  id: '32',
  name: 'File.txt',
  isSelected: false,
  type: 'file',
  children: [],
};

const selectedFile: DirectoryTreeNodeType = {
  id: '33',
  name: 'SelectedFile.txt',
  isSelected: true,
  type: 'file',
  children: [],
};

export const Default: Story = {
  args: {
    file,
  },
};

export const Selected: Story = {
  args: {
    file: selectedFile,
  },
};