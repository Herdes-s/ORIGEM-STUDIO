import styles from "./ContentCard.module.css"

type ContentCardProps = {
  title: string;
  description: string;
  image?: string;
};

export default function ContentCard({
  title,
  description,
  image,
}: ContentCardProps) {
  return (
    <article className={styles.contentCard}>
      {image && <img src={image} alt={title} />}

      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
}
