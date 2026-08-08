import styles from "./SocialLink.module.css";

export default function SocialLink({ label, href }) {
  const isExternal = href.startsWith("http");
  return (
    <a
      className={styles.link}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {label}
    </a>
  );
}
