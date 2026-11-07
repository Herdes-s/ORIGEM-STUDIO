import { Link } from "react-router-dom";
import styles from "./ContentCard.module.css";

type ContentCardProps = {
  title: string;
  description: string;
  image?: string;
  category?: string;
  categoryColor?: string;
  to?: string;
};

export default function ContentCard({
  title,
  description,
  image,
  category,
  categoryColor,
  to,
}: ContentCardProps) {
  return (
    <article className={styles.contentCard}>
      {image && <img src={image} alt={title} />}

      <div className={styles.cardContent}>
        {category && (
          <span
            className={styles.category}
            style={
              categoryColor
                ? {
                    color: categoryColor,
                    borderColor: categoryColor,
                  }
                : undefined
            }
          >
            {category}
          </span>
        )}

        <h2>{title}</h2>
        <p>{description}</p>

        {to && <Link to={to}>Ver detalhes</Link>}
      </div>
    </article>
  );
}
