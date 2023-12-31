import styles from "./user-card.module.css";
import { PersonalDetails } from "@/Api's/interface/PersonDetails";
import { useState } from "react";
import Overlay from "@/app/components/Overlay";

interface Iprops {
  data?: PersonalDetails;
}
const UserCard: React.FC<Iprops> = ({ data }) => {
  const [isCardVisible, setCardVisibility] = useState<boolean>(false);

  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          alt=""
          src={data?.profilePicture || "/assets/UserProfile.png"}
        />
        <div className={styles.rectangleParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.ajayVarmaParent}>
              <b className={styles.ajayVarma}>{data?.name}</b>
              <div className={styles.fvParent}>
                {data?.isVerified && (
                  <img className={styles.fvIcon} alt="" src="/assets/FV.svg" />
                )}
                {data?.isMember && (
                  <img
                    className={styles.fvIcon}
                    alt=""
                    src="/assets/mdi_crown-circle-outline.svg"
                  />
                )}
              </div>
            </div>
          </div>
          <b className={styles.patagoniaConstructions1}>
            {data?.companyName}
            {data?.designation && <span> | </span>}
            {data?.designation}
          </b>
          {data?.city && data?.state && (
            <div className={styles.navigationMapPinParent}>
              <img
                className={styles.navigationMapPin1}
                alt=""
                src="/assets/Map_Pin.svg"
              />
              <div className={styles.ajayVarma}>
                {data?.city} , {data?.state}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.ctaParent}>
          <div onClick={() => setCardVisibility(true)}>
            <div className={styles.cta}>
              <img
                className={styles.communicationPhone1}
                alt=""
                src="/assets/Phone.svg"
              />
              <div className={styles.whatsapp}>Call</div>
            </div>
          </div>

          <div onClick={() => setCardVisibility(true)}>
            <div className={styles.cta2}>
              <img
                className={styles.whatsappIcon1}
                alt=""
                src="/assets/Whatsapp.svg"
              />
              <div className={styles.whatsapp}>Whatsapp</div>
            </div>
          </div>
        </div>
      </div>

      {isCardVisible && (
        <Overlay
          isCardVisible={isCardVisible}
          setCardVisibility={setCardVisibility}
        />
      )}
    </div>
  );
};

export default UserCard;
