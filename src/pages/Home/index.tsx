import { Link } from "react-router-dom";
import Discover from "../../components/Discover";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>UM MUNDO DE AVENTURAS</span>

          <h1>ORIGEM</h1>

          <p>
            {" "}
            Explore o mundo, descubra seus segredos. Encontre criaturas, aprenda
            habilidades e construa sua própria história.
          </p>

          <Link to="/galeria" className={styles.heroButton}>
            Exprorar o jogo
          </Link>
        </div>

        <div className={styles.gamePreview}>
          <div className={styles.previewGlow} />
          <img
            src="/assets/portraits/player.png"
            alt="Personagem jogador de ORIGEM"
          />
          <span className={styles.previewLabel}>SEU MUNDO. SUA HISTÓRIA</span>
        </div>
        <span className={styles.heroDecoration} aria-hidden="true">
          ✦
        </span>
      </section>
      <Discover />
    </main>
  );
}
