import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} Francisco Joel Cruz Fernández - Sitio de Portafolio</p>
        <p className={styles.note}>
          Construido con React, Vite y React Router. Código fuente en{" "}
          <a href="https://github.com/Fran-cruz" target="_blank" rel="noopener noreferrer">
            github.com/Fran-cruz
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
