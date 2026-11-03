import { Link, useParams } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import { getItemById } from "../../data/items";
import styles from "./ItemDetails.module.css";

export default function ItemDetails() {
  const { id } = useParams<{ id: string }>();
  const item = id ? getItemById(id) : undefined;

  if (!item) {
    return (
      <PageLayout
        title="Item não encontrado"
        description="Não foi possível encontrar este item."
      >
        <Link to="/items">Voltar para os itens</Link>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={item.name} description={item.description}>
      <section className={styles.details}>
        {item.image && <img src={item.image} alt={item.name} />}

        <div className={styles.itemInfo}>
          <span className={styles.category}>{item.category}</span>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      </section>

      <Link to="/itens">Voltar para os itens</Link>
    </PageLayout>
  );
}
