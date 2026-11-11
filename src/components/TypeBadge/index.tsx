import styles from "./TypeBadge.module.css";

type TypeBadgeProps = {
  type: "Ativa" | "Passiva" | "Positivo" | "Negativo";
};

const typeStyles = {
  Ativa: styles.active,
  Passiva: styles.passive,
  Positivo: styles.positive,
  Negativo: styles.negative,
};

export default function TypeBadge({ type }: TypeBadgeProps) {
  return <span className={`${styles.badge} ${typeStyles[type]}`}>{type}</span>;
}
