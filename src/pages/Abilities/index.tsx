import ContentCard from "../../components/ContentCard/index.tsx";
import ContentGrid from "../../components/ContentGrid/index.tsx";
import PageLayout from "../../components/PageLayout";
import { abilities } from "../../data/abilities.ts";

export default function Abilities() {
  return (
    <PageLayout
      title="Habilidades"
      description="Conheça as habilidades e poderes disponíveis em ORIGEM."
    >
      {abilities.length > 0 ? (
        <ContentGrid>
          {abilities.map((ability) => (
            <ContentCard
              key={ability.id}
              title={ability.name}
              description={ability.description}
              image={ability.image}
            />
          ))}
        </ContentGrid>
      ) : (
        <p>Nenhuma Habilidade encontrada ainda.</p>
      )}
    </PageLayout>
  );
}
