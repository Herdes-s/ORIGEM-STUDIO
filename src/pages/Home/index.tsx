import { Link } from "react-router-dom";
import Discover from "../../components/Discover";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
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
      <Discover />
    </main>
  );
}
