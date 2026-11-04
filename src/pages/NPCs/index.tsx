import { useState } from "react";
import ContentCard from "../../components/ContentCard";
import ContentGrid from "../../components/ContentGrid";
import PageLayout from "../../components/PageLayout";
import SearchInput from "../../components/SearchInput";
import { npcs } from "../../data/npcs";
import styles from "./NPCs.module.css";
import normalizeText from "../../utils/normalizeText";

export default function NPCs() {
  const [search, setSearch] = useState("");

  const searchText = normalizeText(search);

  const filteredNPCs = npcs.filter((npc) => {
    const name = normalizeText(npc.name);
    const description = normalizeText(npc.description);

    return name.includes(searchText) || description.includes(searchText);
  });
  return (
    <PageLayout
      title="NPCs"
      description="Conheça os personagens que habitam o mundo de ORIGEM."
    >
      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Buscar NPC..."
      />

      <p className={styles.resultsCount}>
        {filteredNPCs.length === 1
          ? "1 NPC encontrado"
          : `${filteredNPCs.length} NPCs encontrados`}
      </p>

      {filteredNPCs.length > 0 ? (
        <ContentGrid>
          {filteredNPCs.map((npc) => (
            <ContentCard
              key={npc.id}
              title={npc.name}
              description={npc.description}
              image={npc.image}
              category={npc.category}
              to={`/npcs/${npc.id}`}
            />
          ))}
        </ContentGrid>
      ) : (
        <div className={styles.emptyState}>
          <h2>Nenhum NPC encontrado</h2>
          <p>
            Não encontramos NPCs com o nome "{search}". Tente pesquisar por
            outro nome.
          </p>
        </div>
      )}
    </PageLayout>
  );
}
