// Header.js
import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#">
        <img
          alt="Mountain"
          className={styles["logo-icon"]}
          src="/images/logo.jpg"
        />
        <span className={styles["logo-text"]}>ImagePro</span>
      </a>
      <nav className={styles.nav}>
        <a className={styles["nav-link"]} href="#">
          Home
        </a>
        <a className={styles["nav-link"]} href="#">
          Features
        </a>
        <a className={styles["nav-link"]} href="#">
          Pricing
        </a>
        <a className={styles["nav-link"]} href="#">
          About
        </a>
      </nav>
    </header>
  );
}
