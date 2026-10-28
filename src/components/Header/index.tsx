import { useState } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Galeria", href: "/galeria" },
  { label: "Bestiário", href: "/bestiario" },
  { label: "Itens", href: "/itens" },
  { label: "Crafts", href: "/crafts" },
  { label: "Habilidades", href: "/habilidades" },
  { label: "NPCs", href: "/npcs" },
  { label: "Player", href: "/player" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>ORIGEM</h1>
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.menu}
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
        <nav
          className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ""}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
