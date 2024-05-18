import styles from "./ExplorerFolder.module.css";
import { CgChevronRight } from "react-icons/cg";

interface FolderProps {
    title: string;
}

const ExplorerFolder: React.FC<FolderProps> = ({ title }) => {
    return (
        <div className={styles.container}>
                        <CgChevronRight className={styles.icon} />

            <p>{title}</p>
        </div>
    );
};

export default ExplorerFolder