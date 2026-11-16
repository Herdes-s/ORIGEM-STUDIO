import { Link, useParams } from "react-router-dom";
import { creatures, getCreatureById } from "../../data/creatures";
import PageLayout from "../../components/PageLayout";
import styles from "./CreatureDetails.module.css";
import { useState } from "react";
import SpriteAnimation from "../../components/SpriteAnimation";

export default function CreatureDetails() {
  const [selectedAnimation, setSelectedAnimation] = useState<
    "attack" | "walk" | "death"
  >("walk");
  const { id } = useParams<{ id: string }>();
  const creature = id ? getCreatureById(id) : undefined;

  const animationDuration = {
    walk: 700,
    attack: 500,
    death: 1000,
  };

  const animationSrc = creature?.animations[selectedAnimation];

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

  const currentIndex = creatures.findIndex((item) => item.id === creature.id);

  const previousCreature = creatures[currentIndex - 1];
  const nextCreature = creatures[currentIndex + 1];

  return (
    <PageLayout title={creature.name} description={creature.description}>
      <section className={styles.details}>
        <div className={styles.creatureContent}>
          <div className={styles.creatureImage}>
            {creature.image && <img src={creature.image} alt={creature.name} />}
          </div>

          <div className={styles.creatureInfo}>
            {creature.category && (
              <span className={styles.category}>{creature.category}</span>
            )}

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
          </div>
        </div>

        <nav className={styles.creatureNavigation}>
          {previousCreature ? (
            <Link to={`/bestiario/${previousCreature.id}`}>
              &larr; {previousCreature.name}
            </Link>
          ) : (
            <span />
          )}

          {nextCreature && (
            <Link to={`/bestiario/${nextCreature.id}`}>
              {nextCreature.name} &rarr;
            </Link>
          )}
        </nav>

        <Link to="/bestiario">Voltar ao Bestiário</Link>
      </section>
      <section className={styles.animationSection}>
        <h2>Animação</h2>

        <div className={styles.animationControls}>
          <button
            type="button"
            className={selectedAnimation === "walk" ? styles.active : ""}
            onClick={() => setSelectedAnimation("walk")}
          >
            Caminhada
          </button>
          <button
            type="button"
            className={selectedAnimation === "attack" ? styles.active : ""}
            onClick={() => setSelectedAnimation("attack")}
          >
            Ataque
          </button>
          <button
            type="button"
            className={selectedAnimation === "death" ? styles.active : ""}
            onClick={() => setSelectedAnimation("death")}
          >
            Morte
          </button>
        </div>
        <div className={styles.animationPreview}>
          {animationSrc ? (
            <SpriteAnimation
              src={animationSrc}
              frameCount={4}
              rows={4}
              direction="front"
              durationMs={animationDuration[selectedAnimation]}
              label={`Animação de ${selectedAnimation}`}
            />
          ) : (
            <p>Animação não disponível.</p>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
