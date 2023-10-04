// import type { NextPage } from "next";
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
          src="/assets/Verified Stamp.png"
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
                <img className={styles.icon} alt="" src="/assets/16287 1.png" />
                <div className={styles.phoneNumberVerificationParent}>
                  <b className={styles.adhaarVerification}>
                    Phone Number Verification
                  </b>
                  <div
                    className={styles.koremIpsumDolor3}
                  >{`Contact Details for the profile have been verified via Otp / Truecaller Profile.`}</div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.parent}>
             <img src="/assets/adhaar.png" alt=""
             className={styles.icon}/>
                <div className={styles.phoneNumberVerificationParent}>
                  <b className={styles.adhaarVerification}>
                    Aadhar Verification
                  </b>
                  <div
                    className={styles.koremIpsumDolor3}
                  >{`The profile’s identity has been verified through e-KYC of their Aadhar on UIDAI government website.`}</div>
                </div>
              </div>
            </div>

            <div className={styles.frameWrapper}>
              <div className={styles.parent}>
                <img className={styles.icon} alt="" src="/assets/510797-PITQPM-244 1.png" />
                <div className={styles.phoneNumberVerificationParent}>
                  <b className={styles.adhaarVerification}>Business & Turnover Verification</b>
                  <div
                    className={styles.koremIpsumDolor3}
                  >{`The profile’s registered business name and annual turnover has been verified by their registered GSTIN.`}</div>
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
            src="/assets/Group 37078.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default SafetyBanner;
