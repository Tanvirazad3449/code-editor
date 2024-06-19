import { useState } from 'react';

function useCreateNewItem() {
  const [isVisible, setIsVisible] = useState(false);
  const [createNewItemType, setCreateNewItemType] = useState<'folder' | 'file'>('folder');

  const handleCreateNewItem = (type: 'file' | 'folder') => {
    setCreateNewItemType(type);
    setIsVisible(true);
  };

  return {
    isVisible,
    createNewItemType,
    setIsVisible,
    handleCreateNewItem
  };
}

export default useCreateNewItem;
