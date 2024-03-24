// Main.js
import React from "react";
import styles from "./Main.module.css";
import FeatureGrid from "./FeatureGrid";

export default function Main() {
  return (
    <main className={styles.main}>
      <section className={`${styles.section} ${styles["section-1"]}`}>
        <div className={styles.container}>
          <div className={styles["text-center"]}>
            <h1 className={styles.title}>Welcome to ImagePro</h1>
            <p className={styles.subtitle}>
              Your one-stop solution for image processing. Enhance your images
              with our advanced machine learning algorithms.
            </p>
            <a className={styles["cta-link"]} href="#">
              Get Started
            </a>
            <a className={styles["cta-link"]} href="#">
              Learn more
            </a>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles["section-2"]}`}>
        <div className={styles.container}>
          <h2 className={styles.title}>Our Main Features</h2>
          <FeatureGrid />
        </div>
      </section>
    </main>
  );
}
