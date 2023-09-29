import { TrustAndSafety } from "@/Api's/interface/PersonDetails";
import styles from "./trust-safety.module.css";
import { useState } from "react";
import SafetyBanner from "../../components/SafetyBanner";

interface Iprops {
  data: TrustAndSafety[];
}

const Trust_Safety: React.FC<Iprops> = ({ data }) => {
  const [showSafetyBanner, setShowSafetyBanner] = useState<boolean>(false);
  const showBanner = () => {
    setShowSafetyBanner(true);
  };
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
            {data.map((item: TrustAndSafety, key) => {
              return (
                <div className={styles.frameGroup} key={key}>
                  <div className={styles.maskGroupParent}>
                    <img className={styles.maskGroupIcon1} alt="" src={item.url} />
                    <div className={styles.userIdentity}>{item.key}</div>
                  </div>
                  <div className={styles.warningCircleCheckParent}>
                    {item.isVerified ? (
                      <img
                        className={styles.warningCircleCheck5}
                        alt=""
                        src="/assets/Circle_Check.svg"
                      />
                    ) : (
                      <img
                        src="/assets/cross.png"
                        alt=""
                        className={styles.warningCircleCheck5}
                      />
                    )}
                    <div className={styles.verificationStatusTags5}>
                      {item.isVerified && (
                        <div className={styles.userIdentity}>{`Verified `}</div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper1} onClick={showBanner}>
        <div className={styles.groupParent}>
          <div className={styles.ellipseParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.securityCheckIcon1}
              alt=""
              src="/assets/Security Check.png"
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
              src="/assets/Right Arrow.svg"
            />
          </div>
        </div>
      </div>
      {showSafetyBanner && (
        <SafetyBanner
          setShowSafetyBanner={setShowSafetyBanner}
          showSafetyBanner={showSafetyBanner}
        />
      )}
    </div>
  );
};

export default Trust_Safety;
