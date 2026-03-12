import Container from "../../components/Container/Container";
import styles from "./styles.module.scss";

export default function SearchButtonAnimation() {
  return (
    <Container
      title="Search Button Animation"
      subtitle="Search button animation. Implemented using CSS."
    >
      <div className={styles.container}>
        <input type="text" name="" placeholder="Search..." />
        <div className={styles.search}></div>
      </div>
    </Container>
  );
}
