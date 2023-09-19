import Link from "next/link";
import styles from "./user-card.module.css";

interface Iprops {
  personalData: {
    name: string;
    isVerified: boolean;
    isMember: boolean;
    phoneNumber: string;
    companyName: string;
    designation: string;
    city?: string;
    state: string;
  };
}
const UserCard: React.FC<Iprops> = ({ personalData }) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="assets/UserProfile.png"
        />
        <div className={styles.rectangleParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.ajayVarmaParent}>
              <b className={styles.ajayVarma}>{personalData.name}</b>
              <div className={styles.fvParent}>
                {personalData.isVerified && (
                  <img className={styles.fvIcon} alt="" src="assets/FV.svg" />
                )}
                {personalData.isMember && (
                  <img
                    className={styles.fvIcon}
                    alt=""
                    src="assets/mdi_crown-circle-outline.svg"
                  />
                )}
              </div>
            </div>
          </div>
          <b className={styles.patagoniaConstructions1}>
            {personalData.companyName} | {personalData.designation}
          </b>
          <div className={styles.navigationMapPinParent}>
            <img
              className={styles.navigationMapPin1}
              alt=""
              src="assets/Map_Pin.svg"
            />
            <div className={styles.ajayVarma}>
              {personalData.city}, {personalData.state}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.ctaParent}>
          <Link href={`tel:${personalData.phoneNumber}`} target="_blank">  
            <div className={styles.cta}>
              <img
                className={styles.communicationPhone1}
                alt=""
                src="assets/Phone.svg"
              />
              <div className={styles.whatsapp}>Call</div>
            </div>
          </Link>

          <Link
            href={`https://wa.me/${personalData.phoneNumber}`}
            target="_blank"
          >
            <div className={styles.cta2}>
              <img
                className={styles.whatsappIcon1}
                alt=""
                src="assets/Whatsapp.svg"
              />
              <div className={styles.whatsapp}>Whatsapp</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
