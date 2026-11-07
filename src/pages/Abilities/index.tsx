import { useMemo, useState } from "react";

import ContentCard from "../../components/ContentCard/index.tsx";
import ContentGrid from "../../components/ContentGrid/index.tsx";
import PageLayout from "../../components/PageLayout";
import SearchInput from "../../components/SearchInput/index.tsx";

import type { AbilityCategory } from "../../types/abilityCategory.ts";
import { abilitiesData } from "../../data/abilitiesData.ts";

import normalizeText from "../../utils/normalizeText.ts";

import styles from "./Abilities.module.css";

const categoryGroups: {
  title: string;
  categories: AbilityCategory[];
}[] = [
  { title: "Habilidades", categories: ["Todas", "Ativa", "Passiva"] },
  { title: "Efeitos", categories: ["Positivo", "Negativo"] },
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
        activeCategory === "Todas" || content.type === activeCategory;

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
      <div className={styles.abilitiesPage}>
        <div className={styles.categoryFilters}>
          {categoryGroups.map((group) => (
            <div className={styles.categoryGroup} key={group.title}>
              <h2>{group.title}</h2>

              <div className={styles.categoryButtons}>
                {group.categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={activeCategory === category}
                    className={`${styles.categoryButton} ${
                      activeCategory === category ? styles.active : ""
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
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
                categoryColor={
                  content.type === "Positivo"
                    ? "#4ade80"
                    : content.type === "Negativo"
                      ? "#f87171"
                      : undefined
                }
              />
            ))}
          </ContentGrid>
        ) : (
          <p className={styles.emptyState}>Nenhum conteúdo encontrado.</p>
        )}
      </div>
    </PageLayout>
  );
}
