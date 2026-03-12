"use client";
import { useState } from "react";
import Container from "../../components/Container/Container";
import styles from "./styles.module.scss";

const tabs = [
  {
    id: "home",
    name: "Home",
    icon: (
      <g
        className={styles.icon1}
        fill="var(--focus-t)"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      >
        <polygon points="12 1,23 10,23 23,16 23,16 14,8 14,8 23,1 23,1 10" />
      </g>
    ),
  },
  {
    id: "videos",
    name: "Videos",
    icon: (
      <g
        fill="var(--focus-t)"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line className={styles.icon1} x1="3" y1="1" x2="21" y2="1" />
        <line x1="2" y1="5" x2="22" y2="5" />
        <g className={styles.icon2} transform="translate(1,9)">
          <polygon points="9 3,15 7.5,9 11" />
          <rect rx="2" ry="2" width="22" height="14" />
          <polygon
            className={styles.icon3}
            opacity="0"
            points="9 3,15 7.5,9 11"
          />
        </g>
      </g>
    ),
  },
  {
    id: "books",
    name: "Books",
    icon: (
      <g
        className={styles.icon1}
        fill="var(--focus-t)"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          className={styles.icon2}
          x="1"
          y="1"
          rx="2"
          ry="2"
          width="11"
          height="19"
        />
        <rect
          className={styles.icon3}
          x="12"
          y="1"
          rx="2"
          ry="2"
          width="11"
          height="19"
        />
        <line x1="12" y1="21" x2="12" y2="23" />
      </g>
    ),
  },
  {
    id: "profile",
    name: "Profile",
    icon: (
      <g fill="var(--focus-t)" stroke="currentColor" strokeWidth="2">
        <circle className={styles.icon1} cx="12" cy="6.5" r="5.5" />
        <path d="M20.473,23H3.003c-1.276,0-2.228-1.175-1.957-2.422,.705-3.239,3.029-8.578,10.693-8.578s9.987,5.336,10.692,8.575c.272,1.248-.681,2.425-1.959,2.425Z" />
      </g>
    ),
  },
];

export default function TabIconAnimations() {
  const [active, setActive] = useState("home");

  return (
    <Container
      title="Tab Icon Animations"
      subtitle="Tab icon animations. Implemented using SCSS."
    >
      <nav className={styles.tabBar}>
        <ul className={styles.tabs}>
          {tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <li key={tab.id} className={styles.tab}>
                <a
                  className={`${styles.link} ${isActive ? styles.active : ""} ${styles[tab.id]}`}
                  href={`#${tab.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(tab.id);
                  }}
                >
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                    aria-hidden="true"
                  >
                    {tab.icon}
                  </svg>
                  <span className={styles.name}>{tab.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </Container>
  );
}
