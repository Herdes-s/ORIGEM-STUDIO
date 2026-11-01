import { Link } from "react-router-dom";
import styles from "./ContentCard.module.css";

type ContentCardProps = {
  title: string;
  description: string;
  image?: string;
  category?: string;
  to?: string;
};

export default function ContentCard({
  title,
  description,
  image,
  category,
  to,
}: ContentCardProps) {
  return (
    <article className={styles.contentCard}>
      {image && <img src={image} alt={title} />}

      <div className={styles.cardContent}>
        {category && (
          <span className={styles.category}>{category}</span>
        )}

        <h2>{title}</h2>
        <p>{description}</p>

        {to && <Link to={to}>Ver detalhes</Link>}
      </div>
    </article>
  );
}
