import Navbar from "@/components/Navbar1";
import AboutSection from "@/components/user-profile/About";
import BusinessCard from "@/components/user-profile/BusinessCard";
import Download from "@/components/user-profile/DownloadCard";
import DownloadApp from "@/components/Download";
import Gallery from "@/components/user-profile/Gallery";
import HeroSection from "@/components/user-profile/HeroSection";
import Portfolio from "@/components/user-profile/PortFolio";
import RatingCard from "@/components/user-profile/RatingCard";
import RatingSection from "@/components/user-profile/RatingSection";
import Services from "@/components/user-profile/Services";
import SimilarProfiles from "@/components/user-profile/SimilarProfiles";
import Trust_Safety from "@/components/user-profile/Trust-safety";
import UserCard from "@/components/user-profile/UserCard";
import styles from "./userProfile.module.css";
import { NextPage } from "next";
import Footer from "@/components/Footer";

const UserProfile: NextPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className={styles.contentWrapper}>
        <div className={styles.mainContainer}>
          <div className={styles.sectionnameContainer}>
            <div className={styles.sectionNames}>
              <div className={styles.bold}>Summary</div>
              <div>Business</div>
              <div>Reviews</div>
            </div>
            <div className={styles.stroke}></div>
          </div>
          <AboutSection />
          <div className={styles.backgroundColor}>
            <Trust_Safety />
            <BusinessCard />
            <Services />
            <Gallery />
            <Portfolio />
            <RatingSection />
          </div>
        </div>
        <div className={styles.advertiseWrapper}>
          <RatingCard />
          <Download />
        </div>
      </div>

      <SimilarProfiles />
      <div className={styles.download}>
        <DownloadApp/>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
