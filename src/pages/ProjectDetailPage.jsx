import { useParams, Link, Navigate } from "react-router-dom";
import Tag from "../components/ui/Tag";
import Button from "../components/ui/Button";
import { getProjectBySlug } from "../data/projects";
import styles from "./ProjectDetailPage.module.css";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <Link to="/proyectos" className={styles.back}>
          ← Volver a Proyectos
        </Link>

        <span className={styles.badge}>{project.contributionType}</span>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.context}>{project.context}</p>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.block}>
          <h2>Mi aporte</h2>
          <p>{project.contribution}</p>
        </div>

        <div className={styles.block}>
          <h2>Tecnologías</h2>
          <div className={styles.tags}>
            {project.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          <Button href={project.links.github} target="_blank" variant="primary">
            Ver código en GitHub
          </Button>
          <Button to="/proyectos" variant="secondary">
            Ver más proyectos
          </Button>
        </div>
      </div>
    </section>
  );
}
