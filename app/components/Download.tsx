import React from "react";
import styles from "./download.module.css";
import Link from "next/link";
const Download = () => {
  return (
    <div className={styles.download}>
      <Link
        href="https://play.google.com/store/apps/details?id=com.projecthero.contractor&hl=en_IN&gl=US"
        target="_blank"
        className={styles.download}
      >
        <img src="/assets/Container.svg" alt="download" 
        className={styles.desktop}/>
        <img src="/assets/Container (1).svg" alt="download" 
        className={styles.mobile}/>
      </Link>
    </div>
  );
};

export default Download;
