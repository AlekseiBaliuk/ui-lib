import Container from "../../components/Container/Container";
import styles from "./styles.module.css";

export default function LavalampCssMenu() {
  return (
    <Container
      title="Lavalamp CSS Menu"
      subtitle="Menu animation with moving fill for each tab when hovering over it. Implemented using CSS."
    >
      <nav className={styles.nav}>
        <a className={styles.link} href="#">Home</a>
        <a className={styles.link} href="#">About</a>
        <a className={styles.link} href="#">Blog</a>
        <a className={styles.link} href="#">Portefolio</a>
        <a className={styles.link} href="#">Contact</a>
        <div className={`${styles.animation} ${styles.start_home}`}></div>
      </nav>
    </Container>
  );
}
