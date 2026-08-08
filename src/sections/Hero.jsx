import Button from "../components/ui/Button";
import { about } from "../data/about";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>{about.role}</p>

          <h1 className={styles.heading}>
            Sistemas que <span>Realmente Resuelven Problemas</span>
          </h1>

          <img className={styles.photo} src={about.photo} alt={`Foto de perfil de ${about.fullName}`} />

          <p className={styles.paragraph}>{about.intro}</p>

          <div className={styles.buttons}>
            <Button href="https://github.com/Fran-cruz" target="_blank" variant="primary">
              GitHub
            </Button>
            <Button to="/proyectos" variant="secondary">
              Mis Proyectos
            </Button>
          </div>
        </div>

        <div className={styles.codeCard}>
          {about.codeSnippet.map((line, i) => (
            <div key={i} className={styles.codeLine}>
              {i === 0 ? (
                <>
                  <span>const</span> francisco = {"{"}
                </>
              ) : (
                line
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
