import type { ReactNode } from "react";
import PageHeader from "../PageHeader";
import styles from "./PageLayout.module.css";

type PageLayoutProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageLayout({
  title,
  description,
  children,
}: PageLayoutProps) {
  return (
    <main className={styles.pageLayout}>
      <PageHeader title={title} description={description} />
      {children}
    </main>
  );
}
