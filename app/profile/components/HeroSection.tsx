import { Payload } from "@/Api's/interface/PersonDetails";
import styles from "./hero-section.module.css";
import UserCard from "./UserCard";
import Link from "next/link";
import { useState } from "react";
import Overlay from "@/app/components/Overlay";

interface Iprops {
  userData?: Payload;
  activeComponent: string | null;
  setActiveComponent: any;
}

const HeroSection: React.FC<Iprops> = ({
  userData,
  activeComponent,
  setActiveComponent,
}) => {
  const [isCardVisible, setCardVisibility] = useState<boolean>(false);
  const shareProfile = () => {
    const currentURL = window.location.href;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(currentURL)}`;
    window.open(whatsappURL, "_blank");
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

        <span className={styles.userName}>{userData?.personalDetails?.name}</span>
      </div>
      <div className={styles.UserCard}>
        <UserCard data={userData?.personalDetails} />
      </div>
      <div className={styles.shareprofile} onClick={shareProfile}>
        <div>Share Profile</div>
        <img src="/assets/Share_Android.svg" alt="" />
      </div>

      {/* for mobile screen */}
      <div className={styles.ctawrapper}>
        <div className={styles.ctaParent}>
          <div onClick={() => setCardVisibility(true)} className={styles.cta}>
            <img
              className={styles.communicationPhone1}
              alt=""
              src="/assets/Phone.svg"
            />
          </div>
          <div onClick={() => setCardVisibility(true)} className={styles.cta2}>
            <img
              className={styles.whatsappIcon1}
              alt=""
              src="/assets/Whatsapp.svg"
            />
          </div>
        </div>
        <Link
          href={`/addRating/${userData?.personalDetails?.userId}`}
          className={styles.cta1}
        >
          <div className={styles.cta2}>Rate this Company</div>
          <img
            className={styles.arrowChevronRight1}
            alt=""
            src="/assets/rightarrow.svg"
          />
        </Link>
      </div>

      {isCardVisible && (
        <Overlay
          isCardVisible={isCardVisible}
          setCardVisibility={setCardVisibility}
        />
      )}

      <div className={styles.personalParent}>
        <button
          value=""
          onClick={(e: any) => setActiveComponent(e.target.value)}
          className={activeComponent === "" ? styles.personal : ""}
        >
          Personal
        </button>
        {userData?.businessCardDetails && (
          <button
            value="business"
            onClick={(e: any) => setActiveComponent(e.target.value)}
            className={activeComponent === "business" ? styles.personal : ""}
          >
            Business
          </button>
        )}
        <button
          value="reviews"
          onClick={(e: any) => setActiveComponent(e.target.value)}
          className={activeComponent === "reviews" ? styles.personal : ""}
        >
          Reviews
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
