import styles from "./ExplorerHeader.module.css";
import { CgFileAdd, CgFolderAdd } from "react-icons/cg";

export default function ExplorerHeader() {
    return (
        <>
            <div className={styles.container}>
                <CgFileAdd className={styles.icon} />
                <CgFolderAdd className={styles.icon} />
            </div>
            <div className={styles.dash} />
        </>
    );
}
