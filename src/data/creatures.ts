import type { Content } from "../types/content";

const slimeImage = "/assets/portraits/slime.png";
const goblinImage = "/assets/portraits/goblin.png";
const skeletonImage = "/assets/portraits/esqueleto.png";

export type Creature = Content & {
  abilities?: string[];
};

export function getCreatureById(id: string) {
  return creatures.find((creature) => creature.id === id);
}

export const creatures: Creature[] = [
  {
    id: "slime",
    name: "Slime",
    description:
      "Uma criatura gelatinosa que se move lentamente e pode se dividir em partes menores.",
    image: slimeImage,
    category: "Criatura",
    abilities: ["Divisão", "Regeneração"],
  },
  {
    id: "goblin",
    name: "Goblin",
    description:
      "Uma criatura pequena e astuta, conhecida por sua inteligência e habilidades de combate.",
    image: goblinImage,
    category: "Criatura",
    abilities: ["Astúcia", "Combate"],
  },
  {
    id: "esqueleto",
    name: "Esqueleto",
    description:
      "Um esqueleto animado que se move com agilidade e é resistente a ataques físicos.",
    image: skeletonImage,
    category: "Criatura",
    abilities: ["Resistência", "Agilidade"],
  },
];
