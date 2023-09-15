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

      {/* for mobile screen */}
      <div className={styles.ctawrapper}>
        <div className={styles.ctaParent}>
          <div className={styles.cta}>
            <img
              className={styles.communicationPhone1}
              alt=""
              src="assets/Phone.svg"
            />
          </div>
          <div className={styles.cta2}>
            <img
              className={styles.whatsappIcon1}
              alt=""
              src="assets/Whatsapp.svg"
            />
          </div>
        </div>
        <div className={styles.cta1}>
          <div className={styles.cta2}>Rate this Company</div>
          <img
            className={styles.arrowChevronRight1}
            alt=""
            src="assets/rightArrow.svg"
          />
        </div>
      </div>

      <div className={styles.personalParent}>
        <div className={styles.personal}>Personal</div>
        <div className={styles.business}>Business</div>
        <div className={styles.business}>Reviews</div>
      </div>
    </div>
  );
};

export default HeroSection;
