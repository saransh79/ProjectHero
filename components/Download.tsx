import React from "react";
import styles from "./download.module.css";
import Link from "next/link";
const Download = () => {
  return (
    <Link
      href="https://play.google.com/store/apps/details?id=com.projecthero.contractor&hl=en_IN&gl=US"
      target="_blank"
      className={styles.download}
    >
      <img src="/assets/Container.png" alt="download" />
    </Link>
  );
};

export default Download;
