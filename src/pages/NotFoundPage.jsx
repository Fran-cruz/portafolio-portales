import Button from "../components/ui/Button";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.code}>404</h1>
        <p className={styles.text}>Esta página no existe.</p>
        <Button to="/" variant="primary">
          Volver al inicio
        </Button>
      </div>
    </section>
  );
}
