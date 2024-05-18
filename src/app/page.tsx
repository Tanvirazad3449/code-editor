import Explorer from "@/components/templates/Explorer";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>

            <div className={styles.container}>
<Explorer/>
            <div className={styles.description}>
                <p>Get started by editing</p>
            </div>
            </div>
        </main>
    );
}
