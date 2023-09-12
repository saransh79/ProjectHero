import type { NextPage } from "next";
import styles from "./location-container.module.css";
const LocationContainer: NextPage = () => {
  return (
      <div className={styles.frameGroup}>
        <div className={styles.locationParent}>
          <div className={styles.locationHeader}>
            <div className={styles.location}>Location</div>
            <img src="/assets/uparrow.svg" alt="upIcon" />
          </div>
          <div className={styles.searchContainer}>
            <div className={styles.searchbox}>
              <input type="text" placeholder="Eg xyz" />
              <div className={styles.go}>
                <img src="/assets/rightarrow.svg" alt="rightarrow" />
              </div>
            </div>
            <div className={styles.location}>
              <img src="/assets/Map_Pin_yellow.svg" alt="locationIcon" />

              <p>Use my current GPS</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LocationContainer;
