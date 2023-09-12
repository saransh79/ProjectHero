import type { NextPage } from "next";
import styles from "./navbar2.module.css";
const Navbar2: NextPage = () => {
  return (
    <div className={styles.phLogo2Parent}>
      <div className={styles.phLogo2}>
        <div className={styles.phNewLogoParent}>
          <img className={styles.phNewLogo} alt="" src="assets/PH New Logo.svg" />
          <div className={styles.business}>Business</div>
        </div>
      </div>
      <div className={styles.rightLinksParent}>
        <div className={styles.rightLinks}>
          <div className={styles.interfaceSearchMagnifyingParent}>
            <img
              className={styles.interfaceSearchMagnifying1}
              alt=""
              src="assets/Search_Magnifying_Glass.svg"
            />
            <div className={styles.search}>Search</div>
          </div>
          <div className={styles.search}>Home</div>
          <div className={styles.search}>Find Professionals</div>
        </div>
        <img className={styles.groupChild} alt="" src="Vector 29.png" />
      </div>
    </div>
  );
};

export default Navbar2;
