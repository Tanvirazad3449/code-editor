import Sidebar from "@/components/organisms/Sidebar";
import Editor from "@/components/organisms/Editor";
import { ActiveFileProvider } from "@/contexts/ActiveFileContext";

export default function MainLayout() {
    return (
        <ActiveFileProvider>
            <div className="flex flex-wrap bg-gray-800">
                <Sidebar />
                <Editor />
            </div>
        </ActiveFileProvider>
    );
}
