"use client";
import { useState, useEffect } from "react";
import axios from "axios";
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
import { Root } from "@/Api's/interface/PersonDetails";
import { userDataApi } from "@/Api's";

const UserProfile: React.FC = () => {
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
  const [userData, setUserData] = useState<Root | null>(null);
  const fetchUserData = async () => {
    try {
      const res = await axios.get<Root>(
        `${userDataApi}6461e51dba87b6953276f448/detailsV2`
      );
      setUserData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <Navbar
            showSearchBox={showSearchBox}
            setShowSearchBox={setShowSearchBox}
          />
          <HeroSection personalDetails={userData?.payload.personalDetails} />

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
                {userData && (
                  <Trust_Safety data={userData?.payload.trustAndSafety} />
                )}
                <BusinessCard data={userData?.payload} />

                <Services data={userData?.payload.primarySpecializations} />

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
      ) : (
        <div
          style={{
            height: "100vh",
            width: "100%",
          }}
        ></div>
      )}
      ;
    </div>
  );
};

export default UserProfile;
