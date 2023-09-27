import { PersonalDetails } from "@/Api's/interface/PersonDetails";
import styles from "./hero-section.module.css";
import UserCard from "./UserCard";


interface Iprops {
  personalDetails?: PersonalDetails;
  activeComponent: string | null;
  setActiveComponent: any;
}

const HeroSection: React.FC<Iprops> = ({personalDetails, activeComponent, setActiveComponent}) => {
  // console.log(personalDetails);

  return (
    <div className={styles.frameParent}>
      <div className={styles.navigation}>
        <span>Home</span>

        <img src="assets/Right Arrow.svg" alt="" />

        <span>Contractor Listing</span>

        <img src="assets/Right Arrow.svg" alt="" />

        <span className={styles.userName}>{personalDetails?.name}</span>
      </div>
      <div className={styles.UserCard}>
        <UserCard data={personalDetails}/>
      </div>
      <div className={styles.shareprofile}>
        <div>Share Profile</div>
        <img src="assets/Share_Android.svg" alt="" />
      </div>

      {/* for mobile screen */}
      <div className={styles.ctawrapper}>
        <div className={styles.ctaParent}>
          <div className={styles.cta}>
            <img
              className={styles.communicationPhone1}
              alt=""
              src="assets/Phone.svg"
            />
          </div>
          <div className={styles.cta2}>
            <img
              className={styles.whatsappIcon1}
              alt=""
              src="assets/Whatsapp.svg"
            />
          </div>
        </div>
        <div className={styles.cta1}>
          <div className={styles.cta2}>Rate this Company</div>
          <img
            className={styles.arrowChevronRight1}
            alt=""
            src="assets/rightarrow.svg"
          />
        </div>
      </div>

      <div className={styles.personalParent}>
        <button
        value=''
        onClick={(e: any)=> setActiveComponent(e.target.value)}
        className={activeComponent === ''? styles.personal: ""}>Personal</button>
        <button
        value='business' 
        onClick={(e: any)=> setActiveComponent(e.target.value)}
        className={activeComponent === 'business' ? styles.personal: ""}>Business</button>
        <button
        value="reviews"
        onClick={(e:any)=> setActiveComponent(e.target.value)}
        className={activeComponent === 'reviews'? styles.personal: ""}>Reviews</button>
      </div>
    </div>
  );
};

export default HeroSection;
