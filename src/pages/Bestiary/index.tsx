import ContentCard from "../../components/ContentCard";
import ContentGrid from "../../components/ContentGrid";
import PageLayout from "../../components/PageLayout";
import { creatures } from "../../data/creatures";

export default function Bestiary() {
  return (
    <PageLayout
      title="Bestiario"
      description="Conheça as criaturas que habitam o mundo de ORIGEM."
    >
      {creatures.length > 0 ? (
        <ContentGrid>
          {creatures.map((creature) => (
            <ContentCard
              key={creature.id}
              title={creature.name}
              description={creature.description}
              image={creature.image}
            />
          ))}
        </ContentGrid>
      ) : (
        <p>Nenhuma criatura cadastrada ainda.</p>
      )}
    </PageLayout>
  );
}
