import Container from "../../components/Container/Container";
import styles from "./styles.module.scss";

export default function Fun404Page() {
  return (
    <Container title="Fun 404 Page" subtitle="Funny animation of a page with error 404. Implemented using SCSS." className='bg-[#D9766C]'>
      <div className={styles.text}>
        <p>404</p>
      </div>
      <div className={styles.container}>
        <div className={styles.caveman1}>
          <div className={styles.leg}>
            <div className={styles.foot}>
              <div className={styles.fingers}></div>
            </div>
          </div>
          <div className={styles.leg}>
            <div className={styles.foot}>
              <div className={styles.fingers}></div>
            </div>
          </div>
          <div className={styles.shape}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.head}>
            <div className={styles.eye}>
              <div className={styles.nose}></div>
            </div>
            <div className={styles.mouth}></div>
          </div>
          <div className={styles.armRight}>
            <div className={styles.club}></div>
          </div>
        </div>

        <div className={styles.caveman2}>
          <div className={styles.leg}>
            <div className={styles.foot}>
              <div className={styles.fingers}></div>
            </div>
          </div>
          <div className={styles.leg}>
            <div className={styles.foot}>
              <div className={styles.fingers}></div>
            </div>
          </div>
          <div className={styles.shape}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.head}>
            <div className={styles.eye}>
              <div className={styles.nose}></div>
            </div>
            <div className={styles.mouth}></div>
          </div>
          <div className={styles.armRight}>
            <div className={styles.club}></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
