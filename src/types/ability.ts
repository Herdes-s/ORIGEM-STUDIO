import type { Content } from "./content";

export type AbilityType = "Ativa" | "Passiva";

export type PassiveAbilityConfig = {
  xpTrigger?: string;
  critChancePerLevel?: number;
  critDamagePerLevel?: number;
};

export type Ability = Content & {
  type: AbilityType;

  damage?: number;
  cooldownMs?: number;
  requiredLevel?: number;

  color?: string;

  iconSrc?: string;

  impactSpriteKey?: string;
  impactFrameCount?: number;
  impactDurationMs?: number;

  spriteKey?: string;
  spriteFrameCount?: number;
  spriteDurationMs?: number;

  range?: string;
  rangeDistance?: number;
  projectileSpeed?: number;

  element?: string;
  manaCost?: number;
  telegraphMs?: number;

  rarity?: string;
  compatibleClasses?: string[];

  effects?: string[];
  passive?: PassiveAbilityConfig;
};
