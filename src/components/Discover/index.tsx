import { Link } from "react-router-dom";
import styles from "./Discover.module.css";

export default function Discover() {
  return (
    <section className={styles.discover}>
      <h2>Descubra ORIGEM</h2>
      <p>
        Explore criaturas, encontre itens e descubra tudo o que o mundo do jogo
        tem a oferecer.
      </p>
      <div className={styles.discoverLinks}>
        <Link to="/galeria">Galeria</Link>
        <Link to="/bestiario">Bestiario</Link>
        <Link to="/itens">Itens</Link>
      </div>
    </section>
  );
}
