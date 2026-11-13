import { Link } from "react-router-dom";
import { Images, BookOpen, Package } from "lucide-react";
import styles from "./Discover.module.css";

const discoverItems = [
  {
    title: "Galeria",
    description: "Conheça imagens, cenários e momentos do mundo de ORIGEM.",
    path: "/galeria",
    icon: Images,
    number: "01",
  },
  {
    title: "Bestiário",
    description: "Descubra as criaturas que habitam este mundo.",
    path: "/bestiario",
    icon: BookOpen,
    number: "02",
  },
  {
    title: "Itens",
    description: "Explore equipamentos, recursos e objetos encontrados.",
    path: "/itens",
    icon: Package,
    number: "03",
  },
];

export default function Discover() {
  return (
    <section className={styles.discover}>
      <div className={styles.discoverHeader}>
        <span className={styles.eyebrow}>EXPLORE O UNIVERSO</span>

        <h2>Descubra ORIGEM</h2>

        <p>
          Explore criaturas, encontre itens e descubra tudo o que o mundo do
          jogo tem a oferecer.
        </p>
      </div>
      <div className={styles.discoverLinks}>
        {discoverItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={styles.discoverCard}
            >
              <span className={styles.cardNumber}>{item.number}</span>
              <div className={styles.cardIcon}>
                <Icon size="2rem" strokeWidth={1.5} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className={styles.cardAction}>
                Explorar <span aria-hidden="true">→</span>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
