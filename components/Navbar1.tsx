import React from "react";
import styles from "./navbar1.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/assets/PH New Logo.svg" alt="logo" />
        <img src="/assets/Business.svg" alt="logo-content" className="business"/>
      </div>
      <div className={styles.navOptions}>
        <div className={styles.link}>
          <a href="#">Home</a>
        </div>
        <div className={`${styles.link}`}>
          <a href="#">Find Professionals</a>
          <div className={styles.stroke}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="136"
              height="4"
              viewBox="0 0 136 4"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M-1.31134e-07 1.93994C-5.87108e-08 1.11151 0.671573 0.439941 1.5 0.439942L134.5 0.439953C135.328 0.439953 136 1.11153 136 1.93995C136 2.76838 135.328 3.43995 134.5 3.43995L1.5 3.43994C0.671573 3.43994 -2.03558e-07 2.76837 -1.31134e-07 1.93994Z"
                fill="#EEC41A"
              />
            </svg>
          </div>
        </div>
        <div className={`${styles.link}`}>
          <a href="#">Contact Us</a>
        </div>
      </div>

      <div className={styles.navIcons}>
        <img
          className={styles.interfaceSearchMagnifying1}
          alt=""
          src="assets/Search_Magnifying_Glass.svg"
        />
        <img
          className={styles.interfaceSearchMagnifying1}
          alt=""
          src="assets/hamburger menu.svg"
        />
      </div>
    </nav>
  );
};

export default Navbar;
