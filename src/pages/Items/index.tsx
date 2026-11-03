import { useState } from "react";
import ContentCard from "../../components/ContentCard";
import ContentGrid from "../../components/ContentGrid";
import PageLayout from "../../components/PageLayout";
import { items } from "../../data/items";
import SearchInput from "../../components/SearchInput";

import styles from "./Items.module.css";
import normalizeText from "../../utils/normalizeText";

export default function Items() {
  const [search, setSearch] = useState("");

  const searchText = normalizeText(search);

  const filteredItems = items.filter((item) => {
    const name = normalizeText(item.name);
    const description = normalizeText(item.name);

    return name.includes(searchText) || description.includes(searchText);
  });
  return (
    <PageLayout
      title="Itens"
      description="Descubra os itens disponíveis no mundo de ORIGEM."
    >
      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Buscar item..."
      />

      <p className={styles.resultsCount}>
        {filteredItems.length === 1
          ? "1 item encontrado"
          : `${filteredItems.length} itens encontrados`}
      </p>

      {filteredItems.length > 0 ? (
        <ContentGrid>
          {filteredItems.map((item) => (
            <ContentCard
              key={item.id}
              title={item.name}
              description={item.description}
              image={item.image}
              category={item.category}
              to={`/itens/${item.id}`}
            />
          ))}
        </ContentGrid>
      ) : (
        <div className={styles.emptyState}>
          <h2>Nenhum item encontrado</h2>
          <p>
            Não encontramos itens com o nome "{search}". Tente pesquisar por
            outro nome.
          </p>
        </div>
      )}
    </PageLayout>
  );
}
