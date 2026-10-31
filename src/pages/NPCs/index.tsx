import ContentCard from "../../components/ContentCard";
import ContentGrid from "../../components/ContentGrid";
import PageLayout from "../../components/PageLayout";
import { npcs } from "../../data/npcs";

export default function NPCs() {
  return (
    <PageLayout
      title="NPCs"
      description="Conheça os personagens que habitam o mundo de ORIGEM."
    >
      {npcs.length > 0 ? (
        <ContentGrid>
          {npcs.map((npc) => (
            <ContentCard
              key={npc.id}
              title={npc.name}
              description={npc.description}
              image={npc.image}
            />
          ))}
        </ContentGrid>
      ) : (
        <p>Nenhum NPC cadastrado ainda.</p>
      )}
    </PageLayout>
  );
}
