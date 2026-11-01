import type { Content } from "../types/content";

const slimeImage = "/assets/sprites/enemies/slime/slime_boss_idle.png";
const goblinImage = "/assets/sprites/enemies/goblin/goblin_idle.png";
const skeletonImage = "/assets/sprites/enemies/esqueleto/esqueleto_idle.png";

export type Creature = Content & {
  abilities?: string[];
};

export function getCreatureById(id: string) {
  return creatures.find((creature) => creature.id === id);
}

export const creatures: Creature[] = [
  {
    id: "creature-1",
    name: "Slime",
    description:
      "Uma criatura gelatinosa que se move lentamente e pode se dividir em partes menores.",
    image: slimeImage,
    category: "Criatura",
    abilities: ["Divisão", "Regeneração"],
  },
  {
    id: "creature-2",
    name: "Goblin",
    description:
      "Uma criatura pequena e astuta, conhecida por sua inteligência e habilidades de combate.",
    image: goblinImage,
    category: "Criatura",
    abilities: ["Astúcia", "Combate"],
  },
  {
    id: "creature-3",
    name: "Esqueleto",
    description:
      "Um esqueleto animado que se move com agilidade e é resistente a ataques físicos.",
    image: skeletonImage,
    category: "Criatura",
    abilities: ["Resistência", "Agilidade"],
  },
];
