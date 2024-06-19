import Button from "@/components/atoms/Button"

interface EditorHeaderProps {
    handleSave: () => void;
    hasUnsavedChanges: boolean;

}
const EditorHeader: React.FC<EditorHeaderProps> = ({ handleSave, hasUnsavedChanges }) => {
    return (
        <div className="text-white py-4 px-6 sticky top-0 z-10 flex items-center justify-end border-b-2 border-gray-700 h-16">
            {hasUnsavedChanges ?
                <div className="flex items-center">
                    <p className="text-yellow-400 mr-4">• Unsaved Changes</p>
                    <Button label="Save" onClick={handleSave} />
                </div>
                :
                <div className="flex items-center">
                    <p className="text-green-400 mr-4">• Saved</p>
                </div>
                }
        </div>

    )
}

export default EditorHeader