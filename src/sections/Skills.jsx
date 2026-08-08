import SectionHeading from "../components/ui/SectionHeading";
import Tag from "../components/ui/Tag";
import { skills } from "../data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHeading title="Habilidades y Tecnologías" subtitle="Stack técnico y herramientas con las que trabajo activamente." />

        <div className={styles.tags}>
          {skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
      </div>
    </section>
  );
}
