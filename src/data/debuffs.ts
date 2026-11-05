import type { StatusEffect } from "../types/statusEffect";

export const debuffs: StatusEffect[] = [
  {
    id: "cansaco",
    name: "Cansaço",
    description: "Seus movimentos ficam mais lentos.",

    type: "Negativo",

    duration: 4000,

    color: "#84cc16",
    iconSrc: "/assets/effects/icons/cansaco.png",

    levels: [
      { durationMs: 4000, speedMultiplier: 0.85 },
      { durationMs: 5000, speedMultiplier: 0.7 },
      { durationMs: 6000, speedMultiplier: 0.55 },
    ],
  },
  {
    id: "cegueira",
    name: "Cegueira",
    description: "Sua visão fica ofuscada por um clarão.",

    type: "Negativo",

    duration: 3000,

    color: "#fef9c3",
    iconSrc: "/assets/effects/icons/cegueira.png",

    levels: [{ durationMs: 3000 }, { durationMs: 4000 }, { durationMs: 5000 }],
  },
  {
    id: "desidratacao",
    name: "Desidratação",
    description: "Você está desidratado e perde vida aos poucos.",

    type: "Negativo",

    duration: 4000,

    color: "#0891b2",
    iconSrc: "/assets/effects/icons/desidratacao.png",

    levels: [
      { durationMs: 4000, damagePerSecond: 0.5 },
      { durationMs: 5000, damagePerSecond: 1 },
      { durationMs: 6000, damagePerSecond: 1.5 },
    ],
  },
  {
    id: "escuridao",
    name: "Escuridão",
    description: "Uma escuridão sobrenatural toma conta da sua visão.",

    type: "Negativo",

    duration: 3000,

    color: "#1e1b4b",
    iconSrc: "/assets/effects/icons/escuridao.png",

    levels: [{ durationMs: 3000 }, { durationMs: 4000 }, { durationMs: 5000 }],
  },
  {
    id: "fraqueza",
    name: "Fraqueza",
    description: "Você está enfraquecido: causa menos dano.",

    type: "Negativo",

    duration: 4000,

    color: "#a16207",
    iconSrc: "/assets/effects/icons/fraqueza.png",

    levels: [
      { durationMs: 4000, damageMultiplier: 0.85 },
      { durationMs: 5000, damageMultiplier: 0.7 },
      { durationMs: 6000, damageMultiplier: 0.55 },
    ],
  },
  {
    id: "queimadura",
    name: "Queimadura",
    description: "Você está pegando fogo e perde vida continuamente.",

    type: "Negativo",

    duration: 4000,

    color: "#ea580c",
    iconSrc: "/assets/effects/icons/queimadura.png",

    levels: [
      { durationMs: 4000, damagePerSecond: 1 },
      { durationMs: 5000, damagePerSecond: 2 },
      { durationMs: 6000, damagePerSecond: 3 },
      { durationMs: 7000, damagePerSecond: 4 },
      { durationMs: 8000, damagePerSecond: 5 },
    ],
  },
];
