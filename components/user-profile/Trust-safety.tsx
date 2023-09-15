import type { NextPage } from "next";
import styles from "./trust-safety.module.css";
const Trust_Safety: NextPage = () => {
  return (
    <div className={styles.detailsParent}>
      <div className={styles.details}>
        <div
          className={styles.projectheroTrust}
        >{`ProjectHero Trust & Safety`}</div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon1}
                  alt=""
                  src="assets/verified user.png"
                />
                <div className={styles.userIdentity}>User Identity</div>
              </div>
              <div className={styles.warningCircleCheckParent}>
                <img
                  className={styles.warningCircleCheck5}
                  alt=""
                  src="assets/Circle_Check.svg"
                />
                <div className={styles.verificationStatusTags5}>
                  <div className={styles.userIdentity}>{`Verified `}</div>
                </div>
              </div>
            </div>
            <div className={styles.dividers}>
              <div className={styles.dividersChild} />
            </div>
            <div className={`${styles.frameParent1} ${styles.frameGroup}`}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon1}
                  alt=""
                  src="assets/Phone Call.png"
                />
                <div className={styles.userIdentity}>Phone Number</div>
              </div>
              <div className={styles.warningCircleCheckParent}>
                <img
                  className={styles.warningCircleCheck5}
                  alt=""
                  src="assets/Circle_Check.svg"
                />
                <div className={styles.verificationStatusTags5}>
                  <div className={styles.userIdentity}>{`Verified `}</div>
                </div>
              </div>
            </div>
            <div className={styles.dividers1}>
              <div className={styles.dividersChild} />
            </div>
            <div className={`${styles.frameParent2} ${styles.frameGroup}`}>
              <div className={styles.biometricIdParent}>
                <img
                  className={styles.maskGroupIcon1}
                  alt=""
                  src="assets/Biometric Id.png"
                />
                <div className={styles.userIdentity}>{`Adhaar `}</div>
              </div>
              <div className={styles.warningCircleCheckParent}>
                <img
                  className={styles.warningCircleCheck5}
                  alt=""
                  src="assets/Circle_Check.svg"
                />
                <div className={styles.verificationStatusTags5}>
                  <div className={styles.userIdentity}>{`Verified `}</div>
                </div>
              </div>
            </div>
            <div className={styles.dividers2}>
              <div className={styles.dividersChild} />
            </div>
            <div className={`${styles.frameParent2} ${styles.frameGroup}`}>
              <div className={styles.biometricIdParent}>
                <img
                  className={styles.taxPercentageIcon1}
                  alt=""
                  src="assets/Tax Percentage.png"
                />
                <div className={styles.userIdentity}>GST Number</div>
              </div>
              <div className={styles.warningCircleCheckParent}>
                <img
                  className={styles.warningCircleCheck5}
                  alt=""
                  src="assets/Circle_Check.svg"
                />
                <div className={styles.verificationStatusTags5}>
                  <div className={styles.userIdentity}>{`Verified `}</div>
                </div>
              </div>
            </div>
            <div className={styles.dividers1}>
              <div className={styles.dividersChild} />
            </div>
            <div className={`${styles.frameParent4} ${styles.frameGroup}`}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.rupeeWallet111}
                  alt=""
                  src="assets/rupee-wallet (1) 1.png"
                />
                <div className={styles.userIdentity}>Turnover</div>
              </div>
              <div className={styles.warningCircleCheckParent}>
                <img
                  className={styles.warningCircleCheck5}
                  alt=""
                  src="assets/Circle_Check.svg"
                />
                <div className={styles.verificationStatusTags5}>
                  <div className={styles.userIdentity}>{`Verified `}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.groupParent}>
          <div className={styles.ellipseParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.securityCheckIcon1}
              alt=""
              src="assets/Security Check.png"
            />
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.learnMoreAboutTrustSafetWrapper}>
              <div
                className={styles.learnMoreAbout1}
              >{`Learn more about Trust & Safety`}</div>
            </div>
            <img
              className={styles.rightArrowIcon1}
              alt=""
              src="assets/Right Arrow.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust_Safety;
