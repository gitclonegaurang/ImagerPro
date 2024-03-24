// FeatureGrid.js
import React from "react";
import FeatureCard from "./FeatureCard";
import styles from "./FeatureGrid.module.css";

export default function FeatureGrid() {
  return (
    <div className={styles["feature-grid"]}>
      <FeatureCard
        title="Low to High Resolution"
        description="Transform your low-resolution images into high-resolution masterpieces with our advanced machine learning algorithms."
      />
      <FeatureCard
        title="Image Classification"
        description="Our AI can classify your images into various categories, making it easier for you to organize and manage your image library."
      />
      <FeatureCard
        title="Filters and Editing"
        description="Add the final touches to your images with our wide range of filters and editing tools, all powered by machine learning."
      />
    </div>
  );
}
