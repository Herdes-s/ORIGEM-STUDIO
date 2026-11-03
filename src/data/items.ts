import type { Content } from "../types/content";

export type Item = Content;

export const items: Item[] = [
  {
    id: "espada_de_ferro",
    name: "Espada de Ferro",
    description: "Uma espada afiada feita de ferro.",
    image: "/assets/items/espada_de_ferro.png",
    category: "Item",
  },
  {
    id: "ferro",
    name: "Barra de Ferro",
    description: "Um pedaço de ferro refinado, útil para crafting.",
    image: "/assets/items/ferro.png",
    category: "Item",
  },
  {
    id: "fragmento",
    name: "Fragmento",
    description: "Um fragmento raro de material misterioso.",
    image: "/assets/items/fragmento.png",
    category: "Item",
  },
  {
    id: "galho",
    name: "Galho",
    description: "Um galho resistente encontrado na floresta.",
    image: "/assets/items/galho.png",
    category: "Item",
  },
  {
    id: "lanterna",
    name: "Lanterna",
    description: "Uma lanterna que ilumina caminhos em cavernas escuras.",
    image: "/assets/items/lanterna.png",
    category: "Item",
  },
  {
    id: "maca",
    name: "Maçã",
    description: "Uma fruta saudável que recupera pequena energia.",
    image: "/assets/items/maca.png",
    category: "Item",
  },
  {
    id: "machado",
    name: "Machado",
    description: "Um machado útil para cortar árvores e abrir caminho.",
    image: "/assets/items/machado.png",
    category: "Item",
  },
  {
    id: "madeira",
    name: "Madeira",
    description: "Um material versátil usado em construções e utilidades.",
    image: "/assets/items/madeira.png",
    category: "Item",
  },
  {
    id: "osso",
    name: "Osso",
    description: "Um osso resistente, útil para crafting e receitas.",
    image: "/assets/items/osso.png",
    category: "Item",
  },
  {
    id: "pedaco_slime",
    name: "Pedaço de Slime",
    description: "Uma substância gelatinosa com propriedades estranhas.",
    image: "/assets/items/pedaco_slime.png",
    category: "Item",
  },
  {
    id: "pedra",
    name: "Pedra",
    description: "Uma rocha comum usada para construir e criar ferramentas.",
    image: "/assets/items/pedra.png",
    category: "Item",
  },
  {
    id: "picareta",
    name: "Picareta",
    description: "Uma ferramenta essencial para minerar rochas e recursos.",
    image: "/assets/items/picareta.png",
    category: "Item",
  },
  {
    id: "pocao_cura_fraca",
    name: "Poção de Cura Fraca",
    description: "Uma poção simples que restaura pequenas quantidades de vida.",
    image: "/assets/items/pocao_cura_fraca.png",
    category: "Item",
  },
  {
    id: "pocao_de_mana",
    name: "Poção de Mana",
    description: "Uma poção energética que restaura mana rapidamente.",
    image: "/assets/items/pocao_de_mana.png",
    category: "Item",
  },
  {
    id: "sangue_de_goblin",
    name: "Sangue de Goblin",
    description: "Sangue bruto de um goblin, útil em misturas e receitas.",
    image: "/assets/items/sangue_de_goblin.png",
    category: "Item",
  },
];

export function getItemById(id: string) {
  return items.find((item) => item.id === id);
}
