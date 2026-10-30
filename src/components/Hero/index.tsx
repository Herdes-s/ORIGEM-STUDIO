import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>ORIGEM</h1>
        <p>Explore o mundo, descubra seus segredos.</p>
        <Link to="/galeria" className={styles.heroButton}>
          Exprorar o jogo
        </Link>
      </div>
      <div className={styles.gamePreview}>
        <img
          src="/assets/portraits/player.png"
          alt="Personagem jogador de ORIGEM"
        />
      </div>
    </section>
  );
}
