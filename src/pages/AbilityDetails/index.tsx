import { useParams } from "react-router-dom";

import PageLayout from "../../components/PageLayout";
import { getAbilityById } from "../../utils/getAbilityById";

import styles from "./AbilityDetails.module.css";

function formatDuration(durationMs: number) {
  return `${durationMs / 1000}s`;
}

function formatMultiplier(value: number) {
  return `${(value * 100).toLocaleString("pt-BR")}% do valor original`;
}

export default function AbilityDetails() {
  const { id } = useParams<{ id: string }>();

  const content = getAbilityById(id ?? "");

  if (!content) {
    return (
      <PageLayout
        title="Conteúdo não encontrado"
        description="Não foi possível encontrar essa habilidade ou efeito."
      />
    );
  }

  const image = content.image ?? content.iconSrc;

  return (
    <PageLayout title={content.name} description={content.description}>
      <div className={styles.details}>
        {image && (
          <div className={styles.imageContainer}>
            <img src={image} alt={content.name} />
          </div>
        )}

        <p className={styles.type}>{content.type}</p>

        {content.type === "Ativa" && (
          <section className={styles.infoSection}>
            <h2>Informações da habilidade</h2>

            <p>Dano: {content.damage ?? "Não informado"}</p>

            <p>
              Recarga:{" "}
              {content.cooldownMs != null
                ? formatDuration(content.cooldownMs)
                : "Não informada"}
            </p>

            <p>Nível necessário: {content.requiredLevel ?? "Não informado"}</p>

            <p>Alcance: {content.range ?? "Não informado"}</p>

            <p>Distância: {content.rangeDistance ?? "Não informada"}</p>

            <p>
              Velocidade do projétil:{" "}
              {content.projectileSpeed ?? "Não informada"}
            </p>

            <p>Elemento: {content.element ?? "Não informado"}</p>

            <p>Custo de mana: {content.manaCost ?? "Não informado"}</p>

            <p>
              Tempo de preparação:{" "}
              {content.telegraphMs != null
                ? formatDuration(content.telegraphMs)
                : "Não informado"}
            </p>

            <p>Raridade: {content.rarity ?? "Não informada"}</p>

            {content.compatibleClasses && (
              <p>Classes compatíveis: {content.compatibleClasses.join(", ")}</p>
            )}

            {content.effects && content.effects.length > 0 && (
              <div>
                <h3>Efeitos adicionais</h3>
                {content.effects.map((effect, index) => (
                  <p key={index}>{effect}</p>
                ))}
              </div>
            )}
          </section>
        )}

        {content.type === "Passiva" && (
          <section className={styles.infoSection}>
            <h2>Informações da habilidade</h2>

            <p>Nível necessário: {content.requiredLevel ?? "Não informado"}</p>

            <p>Raridade: {content.rarity ?? "Não informada"}</p>

            {content.passive && (
              <>
                <h3>Configurações passivas</h3>

                {content.passive.xpTrigger && (
                  <p>Gatilho: {content.passive.xpTrigger}</p>
                )}

                {content.passive.critChancePerLevel != null && (
                  <p>
                    Chance crítica por nível:{" "}
                    {content.passive.critChancePerLevel * 100}%
                  </p>
                )}

                {content.passive.critDamagePerLevel != null && (
                  <p>
                    Dano crítico por nível:{" "}
                    {content.passive.critDamagePerLevel * 100}%
                  </p>
                )}
              </>
            )}

            {content.compatibleClasses && (
              <p>Classes compatíveis: {content.compatibleClasses.join(", ")}</p>
            )}
          </section>
        )}

        {(content.type === "Positivo" || content.type === "Negativo") && (
          <section className={styles.infoSection}>
            <h2>Informações do efeito</h2>

            <p>
              Duração padrão:{" "}
              {content.duration != null
                ? formatDuration(content.duration)
                : "Não informada"}
            </p>

            {(content.healingPerSecond != null ||
              content.damagePerSecond != null ||
              content.damageBonus != null ||
              content.attackSpeedBonus != null ||
              content.speedMultiplier != null ||
              content.damageMultiplier != null) && (
              <div className={styles.effectAttributes}>
                <h3>Atributos do efeito</h3>

                {content.healingPerSecond != null && (
                  <p>Cura por segundo: {content.healingPerSecond} de vida</p>
                )}

                {content.damagePerSecond != null && (
                  <p>Dano por segundo: {content.damagePerSecond}</p>
                )}

                {content.damageBonus != null && (
                  <p>Bônus de dano: +{content.damageBonus}%</p>
                )}

                {content.attackSpeedBonus != null && (
                  <p>
                    Bônus de velocidade de ataque: +{content.attackSpeedBonus}%
                  </p>
                )}

                {content.speedMultiplier != null && (
                  <p>
                    Velocidade de movimento:{" "}
                    {formatMultiplier(content.speedMultiplier)}
                  </p>
                )}

                {content.damageMultiplier != null && (
                  <p>
                    Dano causado: {formatMultiplier(content.damageMultiplier)}
                  </p>
                )}
              </div>
            )}

            {content.levels && content.levels.length > 0 && (
              <div className={styles.levels}>
                <h3>Progressão por nível</h3>

                {content.levels.map((level, index) => (
                  <div key={index} className={styles.level}>
                    <h4>Nível {index + 1}</h4>

                    {level.durationMs != null && (
                      <p>Duração: {formatDuration(level.durationMs)}</p>
                    )}

                    {level.healingPerSecond != null && (
                      <p>Cura por segundo: {level.healingPerSecond} de vida</p>
                    )}

                    {level.damagePerSecond != null && (
                      <p>Dano por segundo: {level.damagePerSecond}</p>
                    )}

                    {level.damageBonus != null && (
                      <p>Bônus de dano: +{level.damageBonus}%</p>
                    )}

                    {level.attackSpeedBonus != null && (
                      <p>
                        Bônus de velocidade de ataque: +{level.attackSpeedBonus}
                        %
                      </p>
                    )}

                    {level.speedMultiplier != null && (
                      <p>
                        Velocidade de movimento:{" "}
                        {formatMultiplier(level.speedMultiplier)}
                      </p>
                    )}

                    {level.damageMultiplier != null && (
                      <p>
                        Dano causado: {formatMultiplier(level.damageMultiplier)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </PageLayout>
  );
}
