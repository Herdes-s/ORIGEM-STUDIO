import { Link } from "react-router-dom";
import Discover from "../../components/Discover";
import styles from "./Home.module.css";

const featuredNPCs = [
  {
    id: "ferreiro-01",
    name: "Arly",
    role: "Ferreiro",
    description: "Criação e melhoria de equipamentos para sua jornada.",
    image: "/assets/portraits/ferreiro.png",
  },
  {
    id: "recepcionista-guilda-01",
    name: "Hya",
    role: "Recepcionista da Guilda",
    description: "Encontre missões, informações e novas oportunidades.",
    image: "/assets/portraits/recepcionista_guilda.png",
  },
  {
    id: "vendedora-pocoes-01",
    name: "Bely",
    role: "Vendedora de Poções",
    description: "Poções, itens mágicos e recursos para suas aventuras.",
    image: "/assets/portraits/vendedora_pocoes.png",
  },
];

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
      <section className={styles.characters}>
        <div className={styles.charactersHeader}>
          <span>PERSONAGENS DO MUNDO</span>

          <h2>Conheça os habitantes</h2>

          <p>
            Pessoas importantes aguardam por você. Converse com os habitantes e
            descubra o que eles podem oferecer.
          </p>
        </div>
        <div className={styles.characterGrid}>
          {featuredNPCs.map((npc) => (
            <Link
              key={npc.id}
              to={`/npc/${npc.id}`}
              className={styles.characterCard}
            >
              <div className={styles.characterImage}>
                <img src={npc.image} alt={npc.name} />
              </div>
              <div className={styles.characterInfo}>
                <span>{npc.role}</span>
                <h3>{npc.name}</h3>
                <p>{npc.description}</p>

                <span className={styles.characterAction}>
                  Conhecer personagem →
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/npcs" className={styles.allCharacters}>
          Conhecer todos os NPCs
        </Link>
      </section>
      <Discover />
    </main>
  );
}
