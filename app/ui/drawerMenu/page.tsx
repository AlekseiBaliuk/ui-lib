"use client";
import { useState } from "react";
import Container from "../../components/Container/Container";
import styles from "./styles.module.scss";

export default function DrawerMenu() {
  const [opened, setOpened] = useState(false);

  return (
    <Container
      title="Drawer Menu"
      subtitle="Smooth appearance of the side menu when clicking on the hamburger button. Implemented using CSS."
      className="bg-[#AEC0FF]"
    >
      <label className={styles.menu_container}>
        <input
          type="checkbox"
          name="menu-button"
          onChange={(e) => setOpened(e.target.checked)}
        />
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div
        className={styles.menu_drawer}
        id="menu-drawer"
        data-opened={opened.toString()}
      >
        <ul>
          <li>The app</li>
          <li>Out story</li>
          <li>Out blog</li>
          <li>Learn more</li>
        </ul>
      </div>

      <article className={styles.title}>
        <h1>Tap to show menu</h1>
        <p>
          Check this almost pure CSS menu animation. Menu button made with
          hidden checkbox trick
        </p>
      </article>
    </Container>
  );
}
