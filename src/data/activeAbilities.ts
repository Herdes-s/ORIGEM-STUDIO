import type { Ability } from "../types/ability";

export const activeAbilities: Ability[] = [
  {
    id: "bola_de_teste",
    name: "Bola de Teste",
    description:
      "Uma esfera de energia que atinge o alvo e explode em uma área reduzida.",

    category: "Habilidade",
    type: "Ativa",

    damage: 12,
    cooldownMs: 2000,
    requiredLevel: 1,

    color: "#0ea5e9",

    spriteKey: "/assets/skills/fx_magia_agua.png",
    spriteFrameCount: 4,
    spriteDurationMs: 600,

    impactSpriteKey: "/assets/skills/fx_explosao_agua.png",
    impactFrameCount: 6,
    impactDurationMs: 1000,

    iconSrc: "/assets/skills/icons/bola_de_teste.png",


    range: "longo",
    rangeDistance: 6,
    projectileSpeed: 6,

    element: "agua",
    manaCost: 8,
    telegraphMs: 600,

    rarity: "comum",
    compatibleClasses: ["mago"],
  },
  {
    id: "golpe_de_teste",
    name: "Golpe de Teste",
    description:
      "Um ataque cortante direto e poderoso, ideal para causar dano físico concentrado.",

    category: "Habilidade",
    type: "Ativa",

    damage: 15,
    cooldownMs: 3000,
    requiredLevel: 1,

    color: "#dc2626",

    spriteKey: "/assets/skills/fx_corte.png",
    spriteFrameCount: 6,
    spriteDurationMs: 600,

    iconSrc: "/assets/skills/icons/golpe_de_teste.png",


    range: "curto",
    rangeDistance: 2,

    element: "fogo",
    rarity: "comum",
    compatibleClasses: ["guerreiro"],
  },
  {
    id: "soco_de_teste",
    name: "Soco de Teste",
    description:
      "Um soco ágil e rápido que surpreende inimigos em combate corpo a corpo.",

    category: "Habilidade",
    type: "Ativa",

    damage: 10,
    cooldownMs: 1500,
    requiredLevel: 1,

    color: "#92400e",

    spriteKey: "/assets/skills/fx_impacto.png",
    spriteFrameCount: 6,
    spriteDurationMs: 600,

    iconSrc: "/assets/skills/icons/soco_de_teste.png",

    range: "curto",
    rangeDistance: 2,

    element: "terra",
    rarity: "comum",
    compatibleClasses: ["guerreiro"],
  },
  {
    id: "rajada_de_teste",
    name: "Rajada de Teste",
    description:
      "Uma magia de luz que queima os inimigos com uma grande esfera radiante.",

    category: "Habilidade",
    type: "Ativa",

    damage: 25,
    cooldownMs: 3500,
    requiredLevel: 1,

    color: "#facc15",

    spriteKey: "/assets/skills/fx_magia_luz.png",
    spriteFrameCount: 4,
    spriteDurationMs: 600,

    impactSpriteKey: "/assets/skills/fx_explosao_luz.png",
    impactFrameCount: 6,
    impactDurationMs: 1000,

    iconSrc: "/assets/skills/icons/rajada_de_teste.png",

    range: "longo",
    rangeDistance: 7,
    projectileSpeed: 7,

    element: "luz",
    manaCost: 20,
    telegraphMs: 900,
    rarity: "rara",
    compatibleClasses: ["mago"],
  },
  {
    id: "perfuracao_de_teste",
    name: "Perfuração de Teste",
    description:
      "Um ataque penetrante que foca em quebrar a defesa do inimigo com eficiência.",

    category: "Habilidade",
    type: "Ativa",

    damage: 13,
    cooldownMs: 2200,
    requiredLevel: 1,

    color: "#334155",

    spriteKey: "/assets/skills/fx_penetrante.png",
    spriteFrameCount: 6,
    spriteDurationMs: 600,

    iconSrc: "/assets/skills/icons/perfuracao_de_teste.png",


    range: "curto",
    rangeDistance: 2,

    element: "vento",
    rarity: "comum",
    compatibleClasses: ["guerreiro"],
  },
];
