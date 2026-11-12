import styles from "./SpriteAnimation.module.css";

type SpriteAnimationProps = {
  src: string;
  frameCount: number;
  durationMs?: number;
  label: string;
};

export default function SpriteAnimation({
  src,
  frameCount,
  durationMs = 800,
  label,
}: SpriteAnimationProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.sprite}
        style={
          {
            "--frame-count": frameCount,
            "--animation-duration": `${durationMs}ms`,
            backgroundImage: `url("${src}")`,
          } as React.CSSProperties
        }
        role="img"
        aria-label={label}
      />

      <span>{label}</span>
    </div>
  );
}
