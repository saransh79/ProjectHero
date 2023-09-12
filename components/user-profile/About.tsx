import type { NextPage } from "next";
import styles from "./about.module.css";
const AboutSection: NextPage = () => {
  return (
    <div className={styles.detailsParent}>
      <div className={styles.details}>
        <div className={styles.about}>About</div>
      </div>
      <div
        className={styles.woremIpsumDolor1}
      >{`Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. `}</div>
    </div>
  );
};

export default AboutSection;
