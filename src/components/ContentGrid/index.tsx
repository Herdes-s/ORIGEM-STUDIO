import type { ReactNode } from "react";
import styles from "./ContentGrid.module.css"

type ContentGridProps = {
    children: ReactNode;
}

export default function ContentGrid({ children }: ContentGridProps) {
    return (
        <div className={styles.contentGrid}>
            {children}
        </div>
    )
}