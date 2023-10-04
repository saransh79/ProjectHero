import { PersonalDetails } from "@/Api's/interface/PersonDetails";
import styles from "./hero-section.module.css";
import UserCard from "./UserCard";
import Link from "next/link";


interface Iprops {
  personalDetails?: PersonalDetails;
  activeComponent: string | null;
  setActiveComponent: any;
}

const HeroSection: React.FC<Iprops> = ({personalDetails, activeComponent, setActiveComponent}) => {
  
  const shareProfile = () => {
    const currentURL = window.location.href; 
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(currentURL)}`;
    window.open(whatsappURL, '_blank');
  };
  return (
    <div className={styles.frameParent}>
      <div className={styles.navigation}>
        <Link href="/">
        <span>Home</span>
        </Link>

        <img src="/assets/Right Arrow.svg" alt="" />
      <Link href="/search">
        <span>Contractor Listing</span>
      </Link>

        <img src="/assets/Right Arrow.svg" alt="" />

        <span className={styles.userName}>{personalDetails?.name}</span>
      </div>
      <div className={styles.UserCard}>
        <UserCard data={personalDetails}/>
      </div>
      <div className={styles.shareprofile} onClick={shareProfile}>
        <div >Share Profile</div>
        <img src="/assets/Share_Android.svg" alt="" />
      </div>

      {/* for mobile screen */}
      <div className={styles.ctawrapper}>
        <div className={styles.ctaParent}>
          <div className={styles.cta}>
            <img
              className={styles.communicationPhone1}
              alt=""
              src="/assets/Phone.svg"
            />
          </div>
          <div className={styles.cta2}>
            <img
              className={styles.whatsappIcon1}
              alt=""
              src="/assets/Whatsapp.svg"
            />
          </div>
        </div>
        <div className={styles.cta1}>
          <Link href={`/addRating/${personalDetails?.userId}`} className={styles.cta2}>Rate this Company</Link>
          <img
            className={styles.arrowChevronRight1}
            alt=""
            src="/assets/rightarrow.svg"
          />
        </div>
      </div>

      <div className={styles.personalParent}>
        <button
        value=''
        onClick={(e: any)=> setActiveComponent(e.target.value)}
        className={activeComponent === ''? styles.personal: ""}>Personal</button>
      {personalDetails?.userType !== 'customer' && <button
        value='business' 
        onClick={(e: any)=> setActiveComponent(e.target.value)}
        className={activeComponent === 'business' ? styles.personal: ""}>Business</button>}
        <button
        value="reviews"
        onClick={(e:any)=> setActiveComponent(e.target.value)}
        className={activeComponent === 'reviews'? styles.personal: ""}>Reviews</button>
      </div>
    </div>
  );
};

export default HeroSection;
