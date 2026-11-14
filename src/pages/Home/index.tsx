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
      <section className={styles.world}>
        <div className={styles.worldContent}>
          <span className={styles.worldLabel}>CONHEÇA O UNIVERSO</span>

          <h2>Um mundo para explorar</h2>

          <p>
            Em ORIGEM, cada lugar guarda histórias, personagens e descobertas.
            Explore cidades, conheça seus habitantes e prepare-se para novas
            aventuras.
          </p>

          <Link to="/galeria" className={styles.worldButton}>
            Conhecer o mundo
          </Link>

          <div className={styles.worldImage}>
            <img
              src="/assets/gallery/cidade.jpg"
              alt="Vista da cidade de ORIGEM, com construções e uma praça central"
            />

            <span className={styles.worldImageCaption}>
              CIDADE - MUNDO DE ORIGEM
            </span>
          </div>
        </div>
      </section>
      <Discover />
    </main>
  );
}
