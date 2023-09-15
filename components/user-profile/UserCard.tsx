import type { NextPage } from "next";
import styles from "./user-card.module.css";
const UserCard: NextPage = () => {
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
              <b className={styles.ajayVarma}>Ajay Varma</b>
              <div className={styles.fvParent}>
                <img className={styles.fvIcon} alt="" src="assets/FV.svg" />
                <img
                  className={styles.fvIcon}
                  alt=""
                  src="assets/mdi_crown-circle-outline.svg"
                />
              </div>
            </div>
          </div>
          <b className={styles.patagoniaConstructions1}>
            Patagonia Constructions | CEO/Owner
          </b>
          <div className={styles.navigationMapPinParent}>
            <img
              className={styles.navigationMapPin1}
              alt=""
              src="assets/Map_Pin.svg"
            />
            <div className={styles.ajayVarma}>Bangalore, Karnataka</div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.ctaParent}>
          <div className={styles.cta}>
            <img
              className={styles.communicationPhone1}
              alt=""
              src="assets/Phone.svg"
            />
            <div className={styles.whatsapp}>Call</div>
          </div>
          <div className={styles.cta2}>
            <img
              className={styles.whatsappIcon1}
              alt=""
              src="assets/Whatsapp.svg"
            />
            <div className={styles.whatsapp}>Whatsapp</div>
          </div>
        </div>
      </div>
      {/* for mobile screen */}
      {/* <div className={styles.frameParent}>
        <div className={styles.ctaParent}>
          <div className={styles.cta}>
            <img
              className={styles.communicationPhone1}
              alt=""
              src="Communication / Phone.svg"
            />
          </div>
          <img className={styles.whatsappIcon1} alt="" src="Whatsapp.svg" />
        </div>
        <div className={styles.cta1}>
          <div className={styles.cta2}>Rate this Company</div>
          <img
            className={styles.arrowChevronRight1}
            alt=""
            src="Arrow / Chevron_Right.svg"
          />
        </div>
      </div> */}
      
    </div>
  );
};

export default UserCard;
