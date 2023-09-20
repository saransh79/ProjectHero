import type { NextPage } from "next";
import styles from "./safety-banner.module.css";
interface Iprops {
  setShowSafetyBanner: any;
  showSafetyBanner: boolean;
}
const SafetyBanner: React.FC<Iprops> = ({
  setShowSafetyBanner,
  showSafetyBanner,
}) => {
  const closeBanner = () => {
    setShowSafetyBanner(false);
  };
  return (
    <div className={`${showSafetyBanner && styles.stampWrapper}`}>
      <div className={styles.verifiedStampParent}>
        <img
          className={styles.verifiedStampIcon}
          alt=""
          src="assets/Verified Stamp.png"
        />
        <div className={styles.frameParent}>
          <div className={styles.projectheroTrustSafetyParent}>
            <b
              className={styles.projectheroTrust}
            >{`ProjectHero Trust & Safety`}</b>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.groupParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.parent}>
                <img className={styles.icon} alt="" src="assets/16287 1.png" />
                <div className={styles.phoneNumberVerificationParent}>
                  <b className={styles.adhaarVerification}>
                    Phone Number Verification
                  </b>
                  <div
                    className={styles.koremIpsumDolor3}
                  >{`Korem ipsum dolor sit amet, consectetur piscing elit. Nunc vulputate `}</div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.parent}>
                <div className={styles.groupWrapper}>
                  <div className={styles.group}>
                    <img
                      className={styles.icon1}
                      alt=""
                      src="assets/17802 1.png"
                    />
                    <img
                      className={styles.image28267Icon1}
                      alt=""
                      src="assets/image 28267.png"
                    />
                    <img
                      className={styles.securityCheckIcon1}
                      alt=""
                      src="assets/Security Check.png"
                    />
                  </div>
                </div>
                <div className={styles.phoneNumberVerificationParent}>
                  <b className={styles.adhaarVerification}>
                    Aadhar Verification
                  </b>
                  <div
                    className={styles.koremIpsumDolor3}
                  >{`Korem ipsum dolor sit amet, consectetur piscing elit. Nunc vulputate `}</div>
                </div>
              </div>
            </div>

            <div className={styles.frameWrapper}>
              <div className={styles.parent}>
                <img className={styles.icon} alt="" src="assets/17802 1.png" />
                <div className={styles.phoneNumberVerificationParent}>
                  <b className={styles.adhaarVerification}>GST Verification</b>
                  <div
                    className={styles.koremIpsumDolor3}
                  >{`Korem ipsum dolor sit amet, consectetur piscing elit. Nunc vulputate `}</div>
                </div>
              </div>
            </div>

            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
          </div>
        </div>
        <button onClick={closeBanner}>
          <img
            className={styles.frameChild1}
            alt=""
            src="assets/Group 37078.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default SafetyBanner;
