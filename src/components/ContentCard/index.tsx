import styles from "./ContentCard.module.css";

type ContentCardProps = {
  title: string;
  description: string;
  image?: string;
  category?: string;
};

export default function ContentCard({
  title,
  description,
  image,
  category,
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
      </div>
    </article>
  );
}
