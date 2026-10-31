import ContentCard from "../../components/ContentCard";
import ContentGrid from "../../components/ContentGrid";
import PageLayout from "../../components/PageLayout";
import { crafts } from "../../data/crafts";

export default function Crafts() {
  return (
    <PageLayout
      title="Crafts"
      description="Descubra as receitas e possibilidades de criação de ORIGEM."
    >
      {crafts.length > 0 ? (
        <ContentGrid>
          {crafts.map((craft) => (
            <ContentCard
              key={craft.id}
              title={craft.name}
              description={craft.description}
              image={craft.image}
            />
          ))}
        </ContentGrid>
      ) : (
        <p>Nenhum craft encontrado ainda.</p>
      )}
    </PageLayout>
  );
}
