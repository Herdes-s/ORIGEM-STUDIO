import ContentCard from "../../components/ContentCard";
import ContentGrid from "../../components/ContentGrid";
import PageLayout from "../../components/PageLayout";
import { items } from "../../data/items";

export default function Items() {
  return (
    <PageLayout
      title="Itens"
      description="Descubra os itens disponíveis no mundo de ORIGEM."
    >
      {items.length > 0 ? (
        <ContentGrid>
          {items.map((item) => (
            <ContentCard
              key={item.id}
              title={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </ContentGrid>
      ) : (
        <p>Nenhum item cadatrado ainda.</p>
      )}
    </PageLayout>
  );
}
