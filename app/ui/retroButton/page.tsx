import Container from "../../components/Container/Container";
import styles from "./styles.module.scss";

export default function RetroButton() {
  return (
    <Container
      title="Retro Button"
      subtitle="Retro style button with press animation. Implemented using SCSS."
      className="bg-[#AEC0FF]"
    >
      <button className={styles.retro}>Click!</button>
    </Container>
  );
}