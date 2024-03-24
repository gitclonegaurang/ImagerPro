// FeatureCard.js
import React from "react";
import styles from "./FeatureCard.module.css";

export default function FeatureCard({ title, description }) {
  return (
    <div className={styles["feature-card"]}>
      <h3 className={styles["feature-title"]}>{title}</h3>
      <p className={styles["feature-description"]}>{description}</p>
    </div>
  );
}
