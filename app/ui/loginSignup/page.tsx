'use client';
import { useState } from 'react';
import Container from "../../components/Container/Container";
import styles from "./styles.module.scss";

export default function LoginSignup() {
  const [mode, setMode] = useState<'login' | 'signup' | null>(null);

  const formClass = [
    styles.forms,
    mode === 'signup' ? styles.bounceLeft : '',
    mode === 'login' ? styles.bounceRight : '',
  ].join(' ');

  return (
    <Container title="Login / Sign Up" subtitle="Effect for switching between registration and login forms. Implemented using CSS and JS.">
      <section className={styles.user}>
        <div className={styles.optionsContainer}>
          <div className={styles.optionsText}>
            <div className={styles.unregistered}>
              <h2 className={styles.unregisteredTitle}>{`Don't have an account?`}</h2>
              <p className={styles.unregisteredText}>Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
              <button className={styles.unregisteredSignup} onClick={() => setMode('signup')}>Sign up</button>
            </div>
            <div className={styles.registered}>
              <h2 className={styles.registeredTitle}>Have an account?</h2>
              <p className={styles.registeredText}>Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
              <button className={styles.registeredLogin} onClick={() => setMode('login')}>Login</button>
            </div>
          </div>

          <div className={formClass}>
            <div className={styles.formLogin}>
              <h2 className={styles.formsTitle}>Login</h2>
              <div className={styles.formsForm}>
                <div className={styles.formsFieldset}>
                  <div className={styles.formsField}>
                    <input type="email" placeholder="Email" className={styles.formsFieldInput} />
                  </div>
                  <div className={styles.formsField}>
                    <input type="password" placeholder="Password" className={styles.formsFieldInput} />
                  </div>
                </div>
                <div className={styles.formsButtons}>
                  <button type="button" className={styles.formsButtonsForgot}>Forgot password?</button>
                  <button type="button" className={styles.formsButtonsAction}>Log In</button>
                </div>
              </div>
            </div>

            <div className={styles.formSignup}>
              <h2 className={styles.formsTitle}>Sign Up</h2>
              <div className={styles.formsForm}>
                <div className={styles.formsFieldset}>
                  <div className={styles.formsField}>
                    <input type="text" placeholder="Full Name" className={styles.formsFieldInput} />
                  </div>
                  <div className={styles.formsField}>
                    <input type="email" placeholder="Email" className={styles.formsFieldInput} />
                  </div>
                  <div className={styles.formsField}>
                    <input type="password" placeholder="Password" className={styles.formsFieldInput} />
                  </div>
                </div>
                <div className={styles.formsButtons}>
                  <button type="button" className={styles.formsButtonsAction}>Sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}