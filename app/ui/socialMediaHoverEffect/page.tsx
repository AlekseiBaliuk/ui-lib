import { FaTwitter, FaFacebook, FaDribbble, FaBehance } from "react-icons/fa";
import Container from "../../components/Container/Container";
import styles from "./styles.module.css";

export default function SocialMediaHoverEffect() {
  return (
    <Container
      title="Social media hover effect"
      subtitle="Hover effect on social networks with their names being pulled out. Implemented using CSS."
    >
      <nav className={styles.social}>
        <ul>
          <li>
            <a href="https://twitter.com/gian_michelle" className={styles.link}>
              Twitter{" "}
              <FaTwitter className={`${styles.icon} ${styles.twitter}`} size={20} />
            </a>
          </li>
          <li>
            <a href="https://facebook.com/" className={styles.link}>
              Facebook <FaFacebook className={`${styles.icon} ${styles.facebook}`} />
            </a>
          </li>
          <li>
            <a href="http://dribbble.com/gian_michelle" className={styles.link}>
              Dribbble <FaDribbble className={`${styles.icon} ${styles.dribbble}`} />
            </a>
          </li>
          <li>
            <a href="http://behance.net/gianm" className={styles.link}>
              Behance <FaBehance className={`${styles.icon} ${styles.behance}`} />
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
