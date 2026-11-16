export type ContentCategory =
  | "Criatura"
  | "Item"
  | "NPC"
  | "Habilidade"
  | "Craft"


export type Content = {
  id: string;
  name: string;
  description: string;
  image?: string;
  category?: ContentCategory;
};
