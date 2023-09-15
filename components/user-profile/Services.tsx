import type { NextPage } from "next";
import styles from "./services.module.css";
const Services: NextPage = () => {
  return (
    <div className={styles.detailsParent}>
      <div className={styles.details}>
        <div className={styles.servicesOffered}>{`Services Offered `}</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <div className={styles.brick}>
              <img
                className={styles.carpenter113}
                alt=""
                src="assets/Carpenter 1 1.png"
              />
            </div>
          </div>
          <div className={styles.workType1Parent}>
            <div className={styles.mobileWorktype}>
              <img src="assets/Carpenter 1 1.png" alt="" />
              <div className={styles.workType21}>Work Type 1</div>
            </div>
            <div className={styles.chipParent}>
              <div className={styles.chip}>
                <div className={styles.labelWrapper}>
                  <div className={styles.label}>Carpenter</div>
                </div>
              </div>
              <div className={styles.chip}>
                <div className={styles.labelWrapper}>
                  <div className={styles.label}>HVAC</div>
                </div>
              </div>
              <div className={styles.chip}>
                <div className={styles.labelWrapper}>
                  <div className={styles.label}>Gypsum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameItem} />
            <div className={styles.brick}>
              <img
                className={styles.carpenter113}
                alt=""
                src="assets/Brick.png"
              />
            </div>
          </div>
          <div className={styles.workType1Parent}>
            <div className={styles.mobileWorktype}>
              <img src="assets/Carpenter 1 1.png" alt="" />
              <div className={styles.workType21}>Work Type 2</div>
            </div>

            <div className={styles.chipParent}>
              <div className={styles.chip}>
                <div className={styles.labelWrapper}>
                  <div className={styles.label}>Carpenter</div>
                </div>
              </div>
              <div className={styles.chip}>
                <div className={styles.labelWrapper}>
                  <div className={styles.label}>HVAC</div>
                </div>
              </div>
              <div className={styles.chip}>
                <div className={styles.labelWrapper}>
                  <div className={styles.label}>Gypsum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameInner} />
            <div className={styles.brick}>
              <img
                className={styles.carpenter113}
                alt=""
                src="assets/Bar Bender 2.png"
              />
            </div>
          </div>
          <div className={styles.workType1Parent}>
            <div className={styles.mobileWorktype}>
              <img src="assets/Carpenter 1 1.png" alt="" />
              <div className={styles.workType21}>Work Type 3</div>
            </div>
            <div className={styles.chipParent}>
              <div className={styles.chip}>
                <div className={styles.labelWrapper}>
                  <div className={styles.label}>{`Shuttering Carpenter `}</div>
                </div>
              </div>
              <div className={styles.chip}>
                <div className={styles.labelWrapper}>
                  <div className={styles.label}>HVAC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
