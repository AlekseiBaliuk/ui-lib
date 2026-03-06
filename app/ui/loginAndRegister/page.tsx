"use client";

import { useState } from "react";
import Container from "../../components/Container/Container";
import styles from "./styles.module.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { MdPerson } from "react-icons/md";

export default function LoginAndRegister() {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <Container
      title="Login / Register"
      subtitle="Brutal design for a registration/login form. Implemented using CSS."
    >
      <div className={styles.section}>
        <h6 className="font-bold text-2xl flex justify-center gap-12">
          <span>Log In</span>
          <span>Sign Up</span>
        </h6>

        {/* Toggle */}
        <input
          className={styles.checkbox}
          type="checkbox"
          id="reg-log"
          checked={isFlipped}
          onChange={() => setIsFlipped(!isFlipped)}
        />
        <label htmlFor="reg-log" className={styles.toggleLabel}></label>

        <div className={styles.card3dWrap}>
          <div
            className={`${styles.card3dWrapper} ${isFlipped ? styles.flipped : ""}`}
          >
            {/* Front - Login */}
            <div className={styles.cardFront}>
              <div className={styles.centerWrap}>
                <div className={styles.section}>
                  <h4>Log In</h4>

                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      name="logemail"
                      className={styles.formStyle}
                      placeholder="Your Email"
                      id="logemail"
                      autoComplete="off"
                    />
                    <MdOutlineAlternateEmail
                      className={styles.inputIcon}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <input
                      type="password"
                      name="logpass"
                      className={styles.formStyle}
                      placeholder="Your Password"
                      id="logpass"
                      autoComplete="off"
                    />
                    <CiLock className={styles.inputIcon} />
                  </div>

                  <a href="#" className={styles.btn}>
                    submit
                  </a>

                  <p>
                    <a href="#" className={styles.link}>
                      Forgot your password?
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Back - Register */}
            <div className={styles.cardBack}>
              <div className={styles.centerWrap}>
                <div className={styles.section}>
                  <h4>Sign Up</h4>

                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="logname"
                      className={styles.formStyle}
                      placeholder="Your Full Name"
                      id="logname"
                      autoComplete="off"
                    />
                    <MdPerson className={styles.inputIcon} />
                  </div>

                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      name="logemail"
                      className={styles.formStyle}
                      placeholder="Your Email"
                      id="logemail"
                      autoComplete="off"
                    />
                    <MdOutlineAlternateEmail
                      className={styles.inputIcon}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <input
                      type="password"
                      name="logpass"
                      className={styles.formStyle}
                      placeholder="Your Password"
                      id="logpass"
                      autoComplete="off"
                    />
                    <CiLock
                      className={styles.inputIcon}
                    />
                  </div>

                  <a href="#" className={styles.btn}>
                    submit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
