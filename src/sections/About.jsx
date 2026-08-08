import Card from "../components/ui/Card";
import SectionHeading from "../components/ui/SectionHeading";
import { about } from "../data/about";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionHeading title="Sobre Mí" subtitle={about.bio} />

        <div className={styles.grid}>
          {about.cards.map((card) => (
            <Card key={card.title} title={card.title}>
              {card.body}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
