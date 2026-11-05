import type { Ability } from "../types/ability";

export const passiveAbilities: Ability[] = [
  {
    id: "critico",
    name: "Crítico",
    description:
      "Uma técnica de alto impacto que potencializa dano em golpes bem colocados.",

    category: "Habilidade",
    type: "Passiva",

    requiredLevel: 1,

    color: "#facc15",

    iconSrc: "/assets/skills/icons/critico.png",

    rarity: "comum",
    compatibleClasses: ["guerreiro", "mago"],

    passive: {
      xpTrigger: "crit",
      critChancePerLevel: 0.05, // +5% da chance base por nível
      critDamagePerLevel: 0.02, // +2% do multiplicador base por nível
    },
  },
];
