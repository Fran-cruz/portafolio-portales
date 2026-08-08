import SectionHeading from "../components/ui/SectionHeading";
import SocialLink from "../components/ui/SocialLink";
import { socialLinks } from "../data/social";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <SectionHeading
          title="Contacto"
          subtitle="¿Interesado en colaborar, trabajo de desarrollo o proyectos técnicos?"
        />

        <div className={styles.socials}>
          {socialLinks.map((link) => (
            <SocialLink key={link.label} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
}
