import styles from "./TimelineItem.module.css";

export default function TimelineItem({ title, description, link }) {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {link && (
        <a className={styles.link} href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label} →
        </a>
      )}
    </div>
  );
}
