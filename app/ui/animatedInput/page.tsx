import Container from "../../components/Container/Container";
import styles from "./styles.module.css";

export default function AnimatedInput() {
  return (
    <Container
      title="Simple form input animation up"
      subtitle="Expands a text input field when the user clicks on it. Implemented using CSS."
      className="bg-[#D9766C]"
    >
      <div className={styles.wrap}>
        <input className={styles.input} type="text" placeholder="hey there" />
        <div className={styles.bg}></div>
      </div>
    </Container>
  );
}
