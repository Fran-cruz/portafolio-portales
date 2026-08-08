import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Proyectos", to: "/proyectos" },
  { label: "Habilidades", to: "/#skills" },
  { label: "Experiencia", to: "/#experience" },
  { label: "Contacto", to: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.nav}`}>
        <Link to="/#top" className={styles.logo} onClick={() => setOpen(false)}>
          Fran<span>Cruz</span>
        </Link>

        <button
          className={styles.toggle}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
