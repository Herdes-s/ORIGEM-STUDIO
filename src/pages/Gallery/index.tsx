import PageLayout from "../../components/PageLayout";
import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <PageLayout
      title="Galeria"
      description="Explore as artes e imagens do mundo de ORIGEM."
    >
      <section className={styles.emptyGallery}>
        <p>Novas imagens serão adicionadas em breve.</p>
      </section>
    </PageLayout>
  );
}
