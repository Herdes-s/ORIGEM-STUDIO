import { Link } from "react-router-dom";
import styles from "./ContentCard.module.css";
import TypeBadge from "../TypeBadge";
import RarityBadge from "../RarityBadge";

type ContentCartCategory = "Ativa" | "Passiva" | "Positivo" | "Negativo";

type ContentCardProps = {
  title: string;
  description: string;
  image?: string;
  category?: ContentCartCategory;
  rarity?: string;
  to?: string;
  variant?: "default" | "creature";
};

export default function ContentCard({
  title,
  description,
  image,
  category,
  rarity,
  to,
  variant = "default",
}: ContentCardProps) {
  const isCriature = variant === "creature";

  return (
    <article
      className={`${styles.contentCard} ${isCriature ? styles.creatureCard : ""}`}
    >
      <div className={isCriature ? styles.creatureImage : undefined}>
        {image && <img src={image} alt={title} />}
      </div>

      <div className={styles.cardContent}>
        {isCriature && (
          <span className={styles.creatureLabel}>REGISTRO DE CRIATURA</span>
        )}

        <div className={styles.badge}>
          {category && <TypeBadge type={category} />}

          {rarity && <RarityBadge rarity={rarity} />}
        </div>

        <h2>{title}</h2>
        <p>{description}</p>

        {to && (
          <Link to={to}>
            {isCriature ? "Consultar registro" : "Ver detalhes"}
            {isCriature && <span aria-hidden="true"> →</span>}
          </Link>
        )}
      </div>
    </article>
  );
}
