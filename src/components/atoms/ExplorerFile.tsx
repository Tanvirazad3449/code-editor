import styles from "./ExplorerFile.module.css";
import { CgFile } from "react-icons/cg";

interface FileProps {
    title: string;
}

const ExplorerFile: React.FC<FileProps> = ({ title }) => {
    return (
        <div className={styles.container}>
            <CgFile className={styles.icon} />
            <p>{title}</p>
        </div>
    );
};

export default ExplorerFile