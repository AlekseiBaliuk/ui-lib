import Container from "../../components/Container/Container";
import styles from "./styles.module.css";

export default function Animated404Page() {
  return (
    <Container
      title="Animation 404"
      subtitle="'Page not found' with an image of a box with missing documents. Implemented using CSS."
    >
      <div className={styles.wrapper}>
        <div className={styles.composition}>
          <div className={`${styles.layer_0} ${styles.shelf}`}>
            <div className={styles.shelf__side_left}></div>
            <div className={styles.shelf__side_bottom}></div>

            <div className={`${styles.case} ${styles.case_1}`}>
              <div className={styles.case__front}></div>
              <div className={styles.case__top}></div>
              <div
                className={`${styles.case__label} ${styles.case__label_right}`}
              ></div>
              <div className={styles.case__right}></div>
              <div className={styles.case__number}>№2428506</div>
            </div>

            <div className={`${styles.case} ${styles.case_2}`}>
              <div className={styles.case__front}></div>
              <div className={styles.case__top}></div>
              <div
                className={`${styles.case__label} ${styles.case__label_left}`}
              ></div>
              <div className={styles.case__right}></div>
              <div className={styles.case__number}>№2428506</div>
            </div>

            {/* Repeat cases 47 times */}
            {Array.from({ length: 47 }, (_, i) =>
              i < 3 ? null : (
                <div
                  key={i}
                  className={`${styles.case} ${styles[`case_${i + 1}`]}`}
                >
                  <div className={styles.case__front}></div>
                  <div className={styles.case__top}></div>
                  <div
                    className={`${styles.case__label} ${styles.case__label_left}`}
                  ></div>
                  <div className={styles.case__right}></div>
                  <div className={styles.case__number}>№2428506</div>
                </div>
              ),
            )}

            <div className={styles.glow}>
              <div className={styles.glow__bottom}></div>
              <div className={styles.glow__top}></div>
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={i}
                  className={`${styles.glow__ball} ${styles[`glow__ball_${i + 1}`]}`}
                ></div>
              ))}
            </div>

            <div className={styles.shelf__side_front}></div>
            <div className={styles.shelf__side_right}></div>

            <div className={styles.shelf__handle_top}></div>
            <div className={styles.shelf__handle_front}></div>
            <div className={styles.shelf__handle_right}></div>
          </div>

          <div className={`${styles.layer_1} ${styles.shadow}`}></div>

          <div className={`${styles.numbers} ${styles.layer2}`}>
            <div
              className={`${styles.numbers__item} ${styles.numbers__item_1}`}
            >
              4
            </div>
            <div
              className={`${styles.numbers__item} ${styles.numbers__item_2}`}
            >
              0
            </div>
            <div
              className={`${styles.numbers__item} ${styles.numbers__item_3}`}
            >
              4
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
