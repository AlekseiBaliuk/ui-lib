import Container from "../../components/Container/Container";
import styles from "./styles.module.css";

export default function CssLoader() {
  return (
    <Container
      title="CSS Loader"
      subtitle="CSS loader. Implemented using CSS."
    >
      <div id={styles.preloader}>
        <div id={styles.loader}></div>
      </div>
    </Container>
  );
}
