import PageHeader from "../../components/PageHeader";
import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <main className={styles.pageLayout}>
      <PageHeader
        title="Galeria"
        description="Explore as artes e imagens do mundo de ORIGEM."
      />
      <section className={styles.emptyGallery}>
        <p>Novas imagens serão adicionadas em breve.</p>
      </section>
    </main>
  );
}
