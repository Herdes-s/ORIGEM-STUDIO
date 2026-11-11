import { Link, useParams } from "react-router-dom";

import PageLayout from "../../components/PageLayout";
import { getAbilityById } from "../../utils/getAbilityById";

import styles from "./AbilityDetails.module.css";
import RarityBadge from "../../components/RarityBadge";
import TypeBadge from "../../components/TypeBadge";

function formatDuration(durationMs: number) {
  return `${durationMs / 1000}s`;
}

function formatMultiplier(value: number) {
  return `${(value * 100).toLocaleString("pt-BR")}% do valor original`;
}

function formatPorcentage(value: number) {
  return `${(value * 100).toLocaleString("pt-BR")}%`;
}

function formatXpTrigger(trigger: string) {
  const triggerLabels: Record<string, string> = {
    crit: "Acerto crítico",
  };

  return triggerLabels[trigger] ?? trigger;
}

function formatClassName(className: string) {
  const classLabel: Record<string, string> = {
    guerreiro: "Guerreiro",
    mago: "Mago",
  };

  return classLabel[className] ?? className;
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
          <div
            className={styles.imageContainer}
            style={
              {
                "--ability-color": content.color ?? "var(--color-primary",
              } as React.CSSProperties
            }
          >
            <img
              src={image}
              alt={content.name}
              className={styles.abilityImage}
            />
          </div>
        )}

        <TypeBadge type={content.type} />

        {content.type === "Ativa" && (
          <section className={styles.infoSection}>
            <h2>Informações da habilidade</h2>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span>Dano</span>
                <strong>{content.damage ?? "Não informado"}</strong>
              </div>

              <div className={styles.infoItem}>
                <span>Recarga</span>
                <strong>
                  {content.cooldownMs != null
                    ? formatDuration(content.cooldownMs)
                    : "Não informada"}
                </strong>
              </div>

              <div className={styles.infoItem}>
                <span>Nível necessário</span>
                <strong>{content.requiredLevel ?? "Não informado"}</strong>
              </div>

              <div className={styles.infoItem}>
                <span>Alcance</span>
                <strong>{content.range ?? "Não informado"}</strong>
              </div>

              <div className={styles.infoItem}>
                <span>Distância</span>
                <strong>{content.rangeDistance ?? "Não informada"}</strong>
              </div>

              <div className={styles.infoItem}>
                <span>Velocidade do projétil</span>
                <strong>{content.projectileSpeed ?? "Não informada"}</strong>
              </div>

              <div className={styles.infoItem}>
                <span>Elemento</span>
                <strong>{content.element ?? "Não informado"}</strong>
              </div>

              <div className={styles.infoItem}>
                <span>Custo de mana</span>
                <strong>{content.manaCost ?? "Não informado"}</strong>
              </div>

              <div className={styles.infoItem}>
                <span>Tempo de preparação</span>
                <strong>
                  {content.telegraphMs != null
                    ? formatDuration(content.telegraphMs)
                    : "Não informado"}
                </strong>
              </div>

              <div className={styles.infoItem}>
                <span>Raridade</span>
                <RarityBadge rarity={content.rarity} />
              </div>
            </div>

            {content.compatibleClasses &&
              content.compatibleClasses.length > 0 && (
                <div className={styles.classList}>
                  {content.compatibleClasses.map((className) => (
                    <span key={className}>{formatClassName(className)}</span>
                  ))}
                </div>
              )}

            {content.effects && content.effects.length > 0 && (
              <div className={styles.effectAttributes}>
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

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span>Nível necessário</span>
                <strong>{content.requiredLevel ?? "Não informado"}</strong>
              </div>

              <div className={styles.infoItem}>
                <span>Raridade</span>
                <RarityBadge rarity={content.rarity} />
              </div>
            </div>

            {content.passive && (
              <div className={styles.effectAttributes}>
                <h3>Configurações passivas</h3>

                <div className={styles.infoGrid}>
                  {content.passive.xpTrigger && (
                    <div className={styles.infoItem}>
                      <span>Gatilho</span>
                      <strong>
                        {formatXpTrigger(content.passive.xpTrigger)}
                      </strong>
                    </div>
                  )}

                  {content.passive.critChancePerLevel != null && (
                    <div className={styles.infoItem}>
                      <span>Chance crítica por nível</span>
                      <strong>
                        {formatPorcentage(content.passive.critChancePerLevel)}
                      </strong>
                    </div>
                  )}

                  {content.passive.critDamagePerLevel != null && (
                    <div className={styles.infoItem}>
                      <span>Dano crítico por nível</span>
                      <strong>
                        {formatPorcentage(content.passive.critDamagePerLevel)}
                      </strong>
                    </div>
                  )}
                </div>
              </div>
            )}

            {content.compatibleClasses &&
              content.compatibleClasses.length > 0 && (
                <div className={styles.effectAttributes}>
                  <h3>Classes compativeis</h3>
                  <div className={styles.classList}>
                    {content.compatibleClasses.map((className) => (
                      <span key={className}>{formatClassName(className)}</span>
                    ))}
                  </div>
                </div>
              )}
          </section>
        )}

        {(content.type === "Positivo" || content.type === "Negativo") && (
          <section className={styles.infoSection}>
            <h2>Informações do efeito</h2>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span>Duração padrão</span>
                <strong>
                  {content.duration != null
                    ? formatDuration(content.duration)
                    : "Não informada"}
                </strong>
              </div>
            </div>

            {(content.healingPerSecond != null ||
              content.damagePerSecond != null ||
              content.damageBonus != null ||
              content.attackSpeedBonus != null ||
              content.speedMultiplier != null ||
              content.damageMultiplier != null) && (
              <div className={styles.effectAttributes}>
                <h3>Atributos do efeito</h3>

                <div className={styles.infoGrid}>
                  {content.healingPerSecond != null && (
                    <div className={styles.infoItem}>
                      <span>Cura por segundo</span>
                      <strong>{content.healingPerSecond} de vida</strong>
                    </div>
                  )}

                  {content.damagePerSecond != null && (
                    <div className={styles.infoItem}>
                      <span>Dano por segundo</span>
                      <strong>{content.damagePerSecond}</strong>
                    </div>
                  )}

                  {content.damageBonus != null && (
                    <div className={styles.infoItem}>
                      <span>Bônus de dano</span>
                      <strong>+{content.damageBonus}%</strong>
                    </div>
                  )}

                  {content.attackSpeedBonus != null && (
                    <div className={styles.infoItem}>
                      <span>Bônus de velocidade de ataque</span>
                      <strong>+{content.attackSpeedBonus}%</strong>
                    </div>
                  )}

                  {content.speedMultiplier != null && (
                    <div className={styles.infoItem}>
                      <span>Velocidade de movimento</span>
                      <strong>
                        {formatMultiplier(content.speedMultiplier)}
                      </strong>
                    </div>
                  )}

                  {content.damageMultiplier != null && (
                    <div className={styles.infoItem}>
                      <span>Dano causado</span>
                      <strong>
                        {formatMultiplier(content.damageMultiplier)}
                      </strong>
                    </div>
                  )}
                </div>
              </div>
            )}

            {content.levels && content.levels.length > 0 && (
              <div className={styles.levels}>
                <h3>Progressão por nível</h3>

                <div className={styles.levelGrid}>
                  {content.levels.map((level, index) => (
                    <div key={index} className={styles.level}>
                      <h4>Nível {index + 1}</h4>

                      <div className={styles.infoGrid}>
                        {level.durationMs != null && (
                          <div className={styles.infoItem}>
                            <span>Duração</span>
                            <strong>{formatDuration(level.durationMs)}</strong>
                          </div>
                        )}

                        {level.healingPerSecond != null && (
                          <div className={styles.infoItem}>
                            <span>Cura por segundo</span>
                            <strong>{level.healingPerSecond} de vida</strong>
                          </div>
                        )}

                        {level.damagePerSecond != null && (
                          <div className={styles.infoItem}>
                            <span>Dano por segundo</span>
                            <strong>{level.damagePerSecond}</strong>
                          </div>
                        )}

                        {level.damageBonus != null && (
                          <div className={styles.infoItem}>
                            <span>Bônus de dano</span>
                            <strong>+{level.damageBonus}%</strong>
                          </div>
                        )}

                        {level.attackSpeedBonus != null && (
                          <div className={styles.infoItem}>
                            <span>Velocidade de ataque</span>
                            <strong>+{level.attackSpeedBonus}%</strong>
                          </div>
                        )}

                        {level.speedMultiplier != null && (
                          <div className={styles.infoItem}>
                            <span>Velocidade de movimento</span>
                            <strong>
                              {formatMultiplier(level.speedMultiplier)}
                            </strong>
                          </div>
                        )}

                        {level.damageMultiplier != null && (
                          <div className={styles.infoItem}>
                            <span>Dano causado</span>
                            <strong>
                              {formatMultiplier(level.damageMultiplier)}
                            </strong>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        <Link to="/habilidades">Voltar a Habilidades</Link>
      </div>
    </PageLayout>
  );
}
