
import { useEffect, useState } from "react";
import styles from "./SpriteAnimation.module.css";

type SpriteAnimationProps = {
  src: string;
  frameCount: number;
  rows?: number;
  direction?: "front" | "back" | "right" | "left";
  durationMs?: number;
  label: string;
};

const directionRows = {
  front: 0,
  back: 1,
  right: 2,
  left: 3,
};

export default function SpriteAnimation({
  src,
  frameCount,
  rows = 1,
  direction = "front",
  durationMs = 800,
  label,
}: SpriteAnimationProps) {
  const [frame, setFrame] = useState(0);

  const selectedRow = rows === 1 ? 0 : directionRows[direction];

  useEffect(() => {
    setFrame(0);

    const interval = window.setInterval(() => {
      setFrame((current) => (current + 1) % frameCount);
    }, durationMs / frameCount);

    return () => window.clearInterval(interval);
  }, [src, frameCount, selectedRow, durationMs]);

  return (
    <div className={styles.container}>
      <div
        className={styles.sprite}
        role="img"
        aria-label={label}
        style={{
          backgroundImage: `url("${src}")`,
          backgroundSize: `${frameCount * 100}% ${rows * 100}%`,
          backgroundPosition: `${
            frameCount === 1 ? 0 : (frame / (frameCount - 1)) * 100
          }% ${rows === 1 ? 0 : (selectedRow / (rows - 1)) * 100}%`,
        }}
      />

      <span>{label}</span>
    </div>
  );
}
