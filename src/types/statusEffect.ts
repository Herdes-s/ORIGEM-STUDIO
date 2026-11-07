import type { Content } from "./content";

export type StatusEffectsType = "Positivo" | "Negativo";

export type StatusEffectLevel = {
  durationMs?: number;

  // Vida
  healingPerSecond?: number;
  damagePerSecond?: number;

  // Dano
  damageBonus?: number;
  damageMultiplier?: number;

  // Velocidade
  speedMultiplier?: number;
  attackSpeedBonus?: number;
};

export type StatusEffect = Content & {
  type: StatusEffectsType;

  duration?: number;
  rarity?: string;

  color?: string;
  iconSrc?: string;

  // Atributos padrão do efeito
  healingPerSecond?: number;
  damagePerSecond?: number;

  damageBonus?: number;
  damageMultiplier?: number;

  speedMultiplier?: number;
  attackSpeedBonus?: number;

  // Atributos específicos de cada nível
  levels?: StatusEffectLevel[];
};
