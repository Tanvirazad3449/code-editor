import type { Meta, StoryObj } from '@storybook/react';

import FileItem, { FileProps } from '.';

const meta: Meta<typeof FileItem> = {
    title: 'Explorer Li',
    component: FileItem,
    // ...
  };

  export default meta

  type Story = StoryObj<FileProps>;
  
export const Primary: Story = {
    args: {
        title: "from storybooklkjlj"
      }
  // ...
};


export const Warning: Story = {
    args: {
        title: 'warning you'
    }
  };