import type { NextPage } from "next";
import styles from "./hero-section.module.css";
import UserCard from "./UserCard";
const HeroSection: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.navigation}>
        <span>Home</span>

        <img src="assets/Right Arrow.svg" alt="" />

        <span>Contractor Listing</span>

        <img src="assets/Right Arrow.svg" alt="" />

        <span className={styles.userName}>Ajay Verma</span>
      </div>
      <div className={styles.UserCard}>
        <UserCard />
      </div>
      <div className={styles.shareprofile}>
        <div>Share Profile</div>
        <img src="assets/Share_Android.svg" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
