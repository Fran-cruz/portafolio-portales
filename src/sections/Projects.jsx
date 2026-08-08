import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionHeading
          title="Proyectos"
          subtitle="Proyectos técnicos de ingeniería de software, robótica, redes e infraestructura, realizados en distintas clases y de forma personal."
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
