import type { Content } from "./content";

export type StatusEffectsType = "Positivo" | "Negativo";

export type StatusEffectLevel = {
  durationMs?: number;
  speedMultiplier?: number;
  damagePerSecond?: number;
  damageMultiplier?: number;
};

export type StatusEffect = Content & {
  type: StatusEffectsType;

  duration?: number;

  color?: string;
  iconSrc?: string;

  levels?: StatusEffectLevel[];
};
