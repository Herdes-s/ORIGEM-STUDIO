import { Link, useParams } from "react-router-dom";
import { getNPCById } from "../../data/npcs";
import PageLayout from "../../components/PageLayout";
import styles from "./NPCDetails.module.css"

export default function NPCDetails() {
  const { id } = useParams<{ id: string }>();
  const npc = id ? getNPCById(id) : undefined;

  if (!npc) {
    return (
      <PageLayout
        title="NPC não encontrado"
        description="Não foi possível encontrar este personagem."
      >
        <Link to="/npcs">Voltar para os NPCs</Link>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={npc.name} description={npc.description}>
      <section className={styles.details}>
        {npc.image && <img src={npc.image} alt={npc.name} />}

        <div className={styles.npcInfo}>
          <span className={styles.category}>{npc.category}</span>
          <h2>{npc.name}</h2>
          <p>{npc.description}</p>
        </div>

        <Link to="/npcs">Voltar para os NPCs</Link>
      </section>
    </PageLayout>
  );
}
