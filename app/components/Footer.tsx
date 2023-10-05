import React from "react";
import styles from "./footer.module.css";
import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.p1}>
          <div className={styles.logo}>
            <img src="/assets/PH New Logo (2).svg" alt="logo" />
            <img
              className={styles.whiteLogo}
              src="/assets/Business.svg"
              alt="logo-content"
            />
          </div>
          <div className={styles.logoDesc}>
          "Your ProjectHeroes are Ready"
          </div>
        </div>
        <div className={styles.p2}>
          <div className={styles.footerHeading}>USEFUL LINKS</div>
          <small>
            <Link href={"/search"}>Find Professionals</Link>
          </small>
          <small>
            <a>Contact Us</a>
          </small>
          <div className={styles.footerIcons}>
            <Link href={"https://www.instagram.com/projectheroapp/?hl=en"} target="_blank">
              <div className={styles.icon}>
                <Instagram/>
              </div>
            </Link>
            <Link href={"https://www.linkedin.com/company/projectheroes/"} target="_blank">
              <div className={styles.icon}>
                <LinkedIn/>
              </div>
            </Link>
            <Link href={"https://www.youtube.com/@ProjectHeroconstruction1021"} target="_blank">
              <div className={styles.icon}>
                <YouTube/>
              </div>
            </Link>
            <Link href={"https://www.facebook.com/ondemandlabour"} target="_blank">
              <div className={styles.icon}>
                <img src="/assets/Facebook.svg" alt=""/>
              </div>
            </Link>
            
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
            <Link href={"tel:08061174206"} target="_blank"
            className={styles.small}>08061174206</Link>
          </div>
          <div className={styles.p3_heading}>
            <div className={styles.contactTypes}>Email:</div>
            <Link href={"mailto:help@projecthero.in"}
            target="_blank"
            className={styles.small}>help@projecthero.in</Link>
          </div>
          <div className={styles.p3_heading}>
            <div className={styles.contactTypes}>Web:</div>
            <Link href={"www.projecthero.in"} target="_blank"
            className={styles.small}>www.projecthero.in</Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <small>© Copyright 2023 - Designed by</small>
        <img src="/assets/PH New Logo (2).svg" alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
