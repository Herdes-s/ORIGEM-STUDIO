import type { Content } from "../types/content";

export type NPC = Content;

export const npcs: NPC[] = [
  {
    id: "ferreiro-01",
    name: "Arly",
    description:
      "Um artesão especializado na criação e melhoria de equipamentos.",
    image: "/assets/portraits/ferreiro.png",
    category: "NPC",
  },
  {
    id: "recepcionista-guilda-01",
    name: "Hya",
    description:
      "Responsável por receber aventureiros, missões e informações importantes.",
    image: "/assets/portraits/recepcionista_guilda.png",
    category: "NPC",
  },
  {
    id: "vendedora-pocoes-01",
    name: "Bely",
    description:
      "Especialista em itens mágicos, remédios e recursos para viagens perigosas.",
    image: "/assets/portraits/vendedora_pocoes.png",
    category: "NPC",
  },
  {
    id: "guarda-cidade-01",
    name: "Guarda da Cidade",
    description:
      "Um defensor da paz e da ordem, sempre atento aos perigos da rua.",
    image: "/assets/portraits/guarda_cidade.png",
    category: "NPC",
  },
  {
    id: "guarda-labirinto-01",
    name: "Guarda do Labirinto I",
    description:
      "Um vigia experiente que protege os corredores e passagens do labirinto.",
    image: "/assets/portraits/guarda_labirinto_1.png",
    category: "NPC",
  },
  {
    id: "guarda-labirinto-02",
    name: "Guarda do Labirinto II",
    description:
      "Um soldado atento, sempre pronto para alertar sobre ameaças ocultas.",
    image: "/assets/portraits/guarda_labirinto_2.png",
    category: "NPC",
  },
];

export function getNPCById(id: string) {
  return npcs.find((npc) => npc.id === id);
}
