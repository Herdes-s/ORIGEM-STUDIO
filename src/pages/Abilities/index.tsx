import { useMemo, useState } from "react";
import ContentCard from "../../components/ContentCard/index.tsx";
import ContentGrid from "../../components/ContentGrid/index.tsx";
import PageLayout from "../../components/PageLayout";
import type { AbilityCategory } from "../../types/abilityCategory.ts";
import { abilitiesData } from "../../data/abilitiesData.ts";
import normalizeText from "../../utils/normalizeText.ts";
import styles from "./Abilities.module.css";
import SearchInput from "../../components/SearchInput/index.tsx";

const categories: AbilityCategory[] = [
  "Todas",
  "Ativa",
  "Passiva",
  "Positivo",
  "Negativo",
];

export default function Abilities() {
  const [activeCategory, setActiveCategory] =
    useState<AbilityCategory>("Todas");

  const [search, setSearch] = useState("");

  const allContent = useMemo(
    () => [
      ...abilitiesData.active,
      ...abilitiesData.passive,
      ...abilitiesData.buffs,
      ...abilitiesData.debuffs,
    ],
    [],
  );

  const filteredContent = useMemo(() => {
    return allContent.filter((content) => {
      const matchesCategory =
        activeCategory === "Todas" ||
        (activeCategory === "Ativa" && content.type === "Ativa") ||
        (activeCategory === "Passiva" && content.type === "Passiva") ||
        (activeCategory === "Positivo" && content.type === "Positivo") ||
        (activeCategory === "Negativo" && content.type === "Negativo");

      const normalizedSearch = normalizeText(search);

      const matchesSearch =
        normalizeText(content.name).includes(normalizedSearch) ||
        normalizeText(content.description).includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [allContent, activeCategory, search]);

  return (
    <PageLayout
      title="Habilidades"
      description="Conheça as habilidades e os efeitos presentes no mundo de ORIGEM."
    >
      <div className={styles.categoryFilters}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`${styles.categoryButton} ${
              activeCategory === category ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Pesquisar habilidades e efeitos..."
      />

      <p className={styles.resultCount}>
        {filteredContent.length === 1
          ? "1 resultado encontrado"
          : `${filteredContent.length} resultados encontrados`}
      </p>

      {filteredContent.length > 0 ? (
        <ContentGrid>
          {filteredContent.map((content) => (
            <ContentCard
              key={content.id}
              title={content.name}
              description={content.description}
              image={content.image ?? content.iconSrc}
              category={content.type}
              to={`/habilidades/${content.id}`}
            ></ContentCard>
          ))}
        </ContentGrid>
      ) : (
        <p className="emptyState">Nenhum conteúdo encontrado.</p>
      )}
    </PageLayout>
  );
}
