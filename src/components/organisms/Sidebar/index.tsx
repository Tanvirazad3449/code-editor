'use client'

import NewItemInput from '@/components/molecules/NewItemInput';
import SidebarContent from '@/components/molecules/SidebarContent';
import SidebarHeader from '@/components/molecules/SidebarHeader';
import useCreateNewItem from '@/hooks/useCreateNewItem';

export default function Sidebar() {
  const { isVisible, createNewItemType, setIsVisible, handleCreateNewItem } = useCreateNewItem();

  return (
    <div className="h-screen flex flex-col bg-gray-950">
      <SidebarHeader handleCreateNewItem={handleCreateNewItem} />
      <NewItemInput itemType={createNewItemType} isVisible={isVisible} setIsVisible={setIsVisible}/>
      <SidebarContent />
    </div>
  );
};

