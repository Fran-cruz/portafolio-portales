import { Link } from "react-router-dom";
import Tag from "./Tag";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/proyectos/${project.slug}`} className={styles.card}>
      <span className={styles.badge}>{project.contributionType}</span>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.summary}>{project.summary}</p>
      <div className={styles.tags}>
        {project.tech.slice(0, 4).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <span className={styles.cta}>Ver detalle →</span>
    </Link>
  );
}
