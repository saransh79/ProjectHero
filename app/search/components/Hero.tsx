import React from "react";
import { NextPage } from "next";
import styles from "./hero.module.css";
import SearchBox from "../../components/SearchBox";
const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <p>Our Professionals</p>
      <div className={styles.searchBox_wrapper}>
        <SearchBox />
      </div>
    </div>
  );
};

export default Hero;
