import ExplorerContent from "../molecules/ExplorerContent";
import ExplorerHeader from "../molecules/ExplorerHeader";
import styles from "./Explorer.module.css";

export default function Explorer() {
    return (
        
            <div className={styles.container}>
                <ExplorerHeader/>
                <ExplorerContent/>
            </div>

    );
}
