import { useState } from "react";
import ContentCard from "../../components/ContentCard";
import ContentGrid from "../../components/ContentGrid";
import PageLayout from "../../components/PageLayout";
import { creatures } from "../../data/creatures";
import styles from "./Bestiary.module.css";

export default function Bestiary() {
  const [search, setSearch] = useState("");

  const filteredCreatures = creatures.filter((creature) =>
    creature.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <PageLayout
      title="Bestiario"
      description="Conheça as criaturas que habitam o mundo de ORIGEM."
    >
      <div className={styles.searchWrapper}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="buscar criatura..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        {search && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={() => setSearch("")}
            aria-label="Limpar pesquisa"
          >
            x
          </button>
        )}
      </div>
      <p className={styles.resultsCount}>
        {filteredCreatures.length === 1
          ? "1 criatura encontrada"
          : `${filteredCreatures.length} criaturas encontradas`}
      </p>
      {filteredCreatures.length > 0 ? (
        <ContentGrid>
          {filteredCreatures.map((creature) => (
            <ContentCard
              key={creature.id}
              title={creature.name}
              description={creature.description}
              image={creature.image}
              category={creature.category}
              to={`/bestiario/${creature.id}`}
            />
          ))}
        </ContentGrid>
      ) : (
        <div className={styles.emptyState}>
          <h2>Nenhuma criatura encontrada</h2>
          <p>
            Não encontramos criaturas com o nome "{search}". Tente pesquisar por
            outro nome.
          </p>
        </div>
      )}
    </PageLayout>
  );
}
