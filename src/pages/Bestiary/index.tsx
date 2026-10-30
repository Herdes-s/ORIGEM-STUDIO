import PageHeader from "../../components/PageHeader";
import styles from "./Bestiary.module.css"

export default function Bestiary() {
    return (
        <main className={styles.pageLayout}>
            <PageHeader title="Bestiario" description="Conheça as criaturas que habitam o mundo de ORIGEM." />
        </main>
    )
}