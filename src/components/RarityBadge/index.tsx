import styles from "./RarityBadge.module.css";

type RarityBadgeProps = {
  rarity?: string;
};

const rarityLabels: Record<string, string> = {
  comum: "Comum",
  rara: "Rara",
};

export default function RarityBadge({ rarity }: RarityBadgeProps) {
  if (!rarity) {
    return null;
  }

  const rarityClass =
    rarity === "comum" ? styles.common : rarity === "rara" ? styles.rare : "";

  return (
    <span className={`${styles.rarity} ${rarityClass}`}>
      {rarityLabels[rarity] ?? rarity}
    </span>
  );
}
