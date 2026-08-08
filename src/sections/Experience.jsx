import SectionHeading from "../components/ui/SectionHeading";
import TimelineItem from "../components/ui/TimelineItem";
import { experience } from "../data/experience";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <SectionHeading
          title="Experiencia y Eventos"
          subtitle="Experiencia práctica a través de trabajo freelance, competencias, exhibiciones y proyectos universitarios."
        />

        <div className={styles.timeline}>
          {experience.map((item) => (
            <TimelineItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
