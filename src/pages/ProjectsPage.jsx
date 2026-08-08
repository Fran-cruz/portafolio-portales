import { Link } from "react-router-dom";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";
import styles from "./ProjectsPage.module.css";

export default function ProjectsPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Link to="/" className={styles.back}>
          ← Volver al inicio
        </Link>

        <SectionHeading
          title="Proyectos"
          subtitle="Proyectos técnicos de ingeniería de software, robótica, redes e infraestructura, realizados en distintas clases y de forma personal. Cada uno detalla si fue individual o grupal, y qué parte desarrollé específicamente."
        />

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
