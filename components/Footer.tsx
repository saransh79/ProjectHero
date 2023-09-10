import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.p1}>
          <div className={styles.logo}>
            <img src="/assets/PH New Logo (2).svg" alt="logo" />
            <img
              className={styles.whiteLogo}
              src="/assets/business.svg"
              alt="logo-content"
            />
          </div>
          <div className={styles.logoDesc}>
            Masters of consistency and quality
          </div>
        </div>
        <div className={styles.p2}>
          <div className={styles.footerHeading}>USEFUL LINKS</div>
          <small>
            <a>Find Professionals</a>
          </small>
          <small>
            <a>Contact Us</a>
          </small>
          <div className={styles.footerIcons}>
            <div>
              <a href="#">
                <img src="/assets/Linkedin.svg" alt="linkedin" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="/assets/Twitter.svg" alt="Twitter" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="/assets/Facebook.svg" alt="linkedin" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="/assets/Instagram.svg" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.p3}>
          <div className={styles.footerHeading}>CONTACT US</div>
          <small>
            BHIVE Workspace, No.467/468 Situated on, Shri Krishna Temple Rd,
          </small>
          <small>Indira Nagar 1st Stage, Bengaluru, Karnataka 560038</small>
          <div className={styles.p3_heading}>
            <div className={styles.contactTypes}>Helpline:</div>
            <small>3456789009</small>
          </div>
          <div className={styles.p3_heading}>
            <div className={styles.contactTypes}>Email:</div>
            <small>infocontractor@gmail.com</small>
          </div>
          <div className={styles.p3_heading}>
            <div className={styles.contactTypes}>Web:</div>
            <small>www.infocontractor.com</small>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <small>© Copyright 2023 - Logoipsum Contractor Designed by</small>
        <img src="/assets/PH New Logo (2).svg" alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
