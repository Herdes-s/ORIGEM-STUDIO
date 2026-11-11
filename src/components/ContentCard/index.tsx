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
};

export default function ContentCard({
  title,
  description,
  image,
  category,
  rarity,
  to,
}: ContentCardProps) {
  return (
    <article className={styles.contentCard}>
      {image && <img src={image} alt={title} />}

      <div className={styles.cardContent}>
        <div className={styles.badge}>
          {category && (
            <TypeBadge
              type={category}
            />
          )}

          {rarity && <RarityBadge rarity={rarity} />}
        </div>

        <h2>{title}</h2>
        <p>{description}</p>

        {to && <Link to={to}>Ver detalhes</Link>}
      </div>
    </article>
  );
}
