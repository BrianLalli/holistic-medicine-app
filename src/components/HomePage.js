import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <h1>Welcome to NewCo</h1>
      <p>Find the best physician for your needs.</p>
      <Link to="/quiz" className={styles.startQuizButton}>
        Start Quiz
      </Link>
    </div>
  );
}

export default HomePage;
