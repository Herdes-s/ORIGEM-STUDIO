import { Link, useParams } from "react-router-dom";
import { getCreatureById } from "../../data/creatures";
import PageLayout from "../../components/PageLayout";
import styles from "./CreatureDetails.module.css";

export default function CreatureDetails() {
  const { id } = useParams<{ id: string }>();
  const creature = id ? getCreatureById(id) : undefined;

  if (!creature) {
    return (
      <PageLayout
        title="Criatura não encontrada"
        description="A criatura que você está procurando não foi encontrada."
      >
        <Link to="/bestiario">Voltar ao Bestiário</Link>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={creature.name} description={creature.description}>
      <section className={styles.details}>
        {creature.image && <img src={creature.image} alt={creature.name} />}

        {creature.abilities && creature.abilities.length > 0 && (
          <div>
            <h2>Habilidades</h2>
            <ul>
              {creature.abilities.map((ability) => (
                <li key={ability}>{ability}</li>
              ))}
            </ul>
          </div>
        )}

        <Link to="/bestiario">Voltar ao Bestiário</Link>
      </section>
    </PageLayout>
  );
}
