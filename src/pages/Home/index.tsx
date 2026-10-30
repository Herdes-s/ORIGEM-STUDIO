import Discover from "../../components/Discover";
import Hero from "../../components/Hero";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Discover />
    </main>
  );
}
