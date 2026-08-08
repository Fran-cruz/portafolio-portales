import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button({ to, href, variant = "primary", children, target, ...rest }) {
  const className = `${styles.btn} ${variant === "secondary" ? styles.secondary : styles.primary}`;

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className={className} {...rest}>
      {children}
    </a>
  );
}
