import Container from "../../components/Container/Container";
import styles from "./styles.module.css";

export default function GradientLightPreloaderPage() {
  return (
    <Container
      title="Gradient Light Preloader"
      subtitle="Neon gradient transition along the preloader outline. Implemented using CSS."
    >
      <div className={styles.loader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Container>
  );
}
