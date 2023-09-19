import styles from "./about.module.css";
const AboutSection = () => {
  return (
    <div className={styles.detailsParent}>
      <div className={styles.personalDetailsParent}>
        <div className={styles.personalDetailsWrapper}>
          <div className={styles.personalDetails}>Personal Details</div>
        </div>
        <img className={styles.frameChild} alt="" src="assets/Vector 93.svg" />
      </div>
      <div className={styles.details}>
        <div className={styles.about}>About</div>
      </div>
      <div
        className={styles.woremIpsumDolor1}
      >Not Available</div>
    </div>
  );
};

export default AboutSection;
