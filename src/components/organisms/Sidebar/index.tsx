
import SidebarContent from '@/components/molecules/SidebarContent';
import SidebarHeader from '@/components/molecules/SidebarHeader';

export default function Sidebar() {
  return (
    <div className="h-screen flex flex-col w-full md:w-1/6 bg-gray-950">
        <SidebarHeader/>
        <SidebarContent />
    </div>
  );
};

