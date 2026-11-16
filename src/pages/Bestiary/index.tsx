import { useState } from "react";
import ContentCard from "../../components/ContentCard";
import ContentGrid from "../../components/ContentGrid";
import PageLayout from "../../components/PageLayout";
import { creatures } from "../../data/creatures";
import styles from "./Bestiary.module.css";
import SearchInput from "../../components/SearchInput";
import normalizeText from "../../utils/normalizeText";

export default function Bestiary() {
  const [search, setSearch] = useState("");

  const searchText = normalizeText(search);

  const filteredCreatures = creatures.filter((creature) => {
    const name = normalizeText(creature.name);
    const description = normalizeText(creature.description);

    const abilities = creature.abilities?.some((ability) =>
      normalizeText(ability).includes(searchText),
    );

    return (
      name.includes(searchText) || description.includes(searchText) || abilities
    );
  });

  return (
    <PageLayout
      title="Bestiario"
      description="Conheça as criaturas que habitam o mundo de ORIGEM."
    >
      <section className={styles.catalog}>
        <div className={styles.catalogIntro}>
          <span className={styles.catalogLabel}>COMPÊNDIO DE CRIATURAS</span>
          <h2>Registro de criaturas</h2>

          <p>
            Descubra os seres que habitam este mundo. Pesquise por nome,
            descrição ou habilidade.
          </p>
        </div>
        <div className={styles.catalogTools}>
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="buscar criatura..."
          />
          <div className={styles.resultsCount}>
            <span>
              {filteredCreatures.length === 1
                ? "1 criatura encontrada"
                : `${filteredCreatures.length} criaturas encontradas`}
            </span>

            <span className={styles.totalCount}>Total no catálogo: {creatures.length}</span>
          </div>
        </div>
      </section>

      {filteredCreatures.length > 0 ? (
        <ContentGrid>
          {filteredCreatures.map((creature) => (
            <ContentCard
              key={creature.id}
              title={creature.name}
              description={creature.description}
              image={creature.image}
              to={`/bestiario/${creature.id}`}
              variant="creature"
            />
          ))}
        </ContentGrid>
      ) : (
        <div className={styles.emptyState}>
          <h2>Nenhuma criatura encontrada</h2>
          <p>
            Não encontramos criaturas com o termo "{search}". Tente pesquisar
            por outro nome ou habilidade.
          </p>
        </div>
      )}
    </PageLayout>
  );
}
