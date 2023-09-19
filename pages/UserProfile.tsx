"use client";
import { useState, useEffect } from "react";
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
import styles from "./userProfile.module.css";
import Footer from "@/components/Footer";
import { Root } from "@/Api's/PersonDetails";

const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<Root | null>(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://stage-api.projecthero.in/gateway/review-website/customer/6461e51dba87b6953276f448/detailsV2')
      .then((response) => response.json())
      .then((data: Root) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs once


  // console.log(userData);

  return (
    <div>
      <Navbar />
      {userData && <HeroSection personalDetails={userData?.payload.personalDetails} />}
      
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
         { userData && <Trust_Safety data= {userData?.payload.trustAndSafety}/>}
          { userData && <BusinessCard data={userData?.payload}/>}
           {userData && <Services data={userData?.payload.primarySpecializations}/>}
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
        <DownloadApp />
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
