import type { StatusEffect } from "../types/statusEffect";

export const buffs: StatusEffect[] = [
  {
    id: "cura_continua",
    name: "Cura contínua",
    description: "O núcleo cura você aos poucos enquanto está em combate.",

    type: "Positivo",
    healingPerSecond: 2,
    duration: 300000,

    color: "#4ade80",
    iconSrc: "/assets/effects/icons/cura_continua.png",
  },
  {
    id: "furia",
    name: "Fúria",
    description:
      "O núcleo aumenta seu dano e sua velocidade de ataque enquanto está em combate.",

    type: "Positivo",
    damageBonus: 20,
    attackSpeedBonus: 20,

    duration: 300000,

    color: "#f97316",
    iconSrc: "/assets/effects/icons/furia.png",
  },
  {
    id: "fur",
    name: "Fúr",
    description:
      "O núcleo aumenta seu dano e sua velocidade de ataque enquanto está em combate.",

    type: "Positivo",


    color: "#f97316",
    iconSrc: "/assets/effects/icons/furia.png",
  },
];
