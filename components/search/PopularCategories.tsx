import type { NextPage } from "next";
import styles from "./popular-categories.module.css";
const PopularCategories: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.popularCategories}>Popular Categories</div>
      <div className={styles.radioButtonParent}>
        <div className={styles.radioButtonWrapper}>
          <div className={styles.radioButton}>
            <div className={styles.imageWrapper}>
              <img alt="sub-contractor" src="/assets/SC.png" />
            </div>

            <div className={styles.fieldText}>Sub Contractor</div>
            <div className={styles.label}>
              Execute trade wise contracts mostly with materials
            </div>
          </div>
        </div>

        <div className={styles.radioButtonWrapper}>
          <div className={styles.radioButton}>
            <div className={styles.imageWrapper}>
              <img alt="General contractor" src="/assets/GC.png" />
            </div>
            <div className={styles.fieldText}>General Contractor</div>
            <div className={styles.label}>
              Execute turnkey projects & work directly with the Client
            </div>
          </div>
        </div>

        <div className={styles.radioButtonWrapper}>
          <div className={styles.radioButton}>
            <div className={styles.imageWrapper}>
              <img alt="" src="/assets/ID.png" />
            </div>

            <div className={styles.fieldText}>
              Architect / Interior Designer
            </div>
            <div className={styles.label}>
              Offer Architectural & Interior designing services
            </div>
          </div>
        </div>
        <div className={styles.radioButtonWrapper}>
          <div className={styles.radioButton}>
            <div className={styles.imageWrapper}>
              <img alt="" src="/assets/LC.png" />
            </div>

            <div className={styles.fieldText}>Labour Contractor / Supplier</div>
            <div className={styles.label}>
              Provide workers on measurement or daily wage basis
            </div>
          </div>
        </div>

        <div className={styles.radioButtonWrapper}>
          <div className={styles.radioButton}>
            <div className={styles.imageWrapper}>
              <img alt="" src="/assets/PMC.png" />
            </div>

            <div className={styles.fieldText}>PMC / Consultants</div>
            <div className={styles.label}>
              Provide Project Management Consultancy & other services
            </div>
          </div>
        </div>

        <div className={styles.radioButtonWrapper}>
          <div className={styles.radioButton}>
            <div className={styles.imageWrapper}>
              <img alt="" src="/assets/C.png" />
            </div>

            <div className={styles.fieldText}>Customer</div>
            <div className={styles.label}>
              Want to get my project or work done
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
