"use client";
import { useState, useEffect } from "react";
// import axios from "axios";
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
import { fetchSimilarProfiles, fetchUserDetails } from "@/Api's";
// import Link from "next/link";
import { useParams } from "react-router-dom";
import { Payload } from "@/Api's/interface/SimilarProfiles";

const UserProfile: React.FC = () => {
  const { userId } = useParams();

  const [activeComponent, setActiveComponent] = useState<string | null>("");
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
  const [userData, setUserData] = useState<Root | null>(null);
  const [similarProfiles, setSimilarProfiles] = useState<Payload | null>(null);
  const toggleActiveComponent = (e: any) => {
    setActiveComponent(e.target.value);
  };
  useEffect(() => {
    fetchUserDetails(userId)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error while fetching userDetails: ", error);
      });

    fetchSimilarProfiles(userData?.payload.personalDetails.designation)
      .then((res) => {
        setSimilarProfiles(res.data.payload);
      })
      .catch((err) => {
        console.error("Error while fetching similar profiles: ", err);
      });
  }, [userId]);

  return (
    <div>
      <div>
        <Navbar
          showSearchBox={showSearchBox}
          setShowSearchBox={setShowSearchBox}
        />
        <HeroSection
          personalDetails={userData?.payload.personalDetails}
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />

        <div className={styles.contentWrapper}>
          <div className={styles.mainContainer}>
            <div className={styles.sectionnameContainer}>
              <div className={styles.sectionNames}>
                <button
                  value=""
                  onClick={toggleActiveComponent}
                  className={activeComponent === "" ? styles.bold : ""}
                >
                  Summary
                </button>
                <button
                  value="business"
                  onClick={toggleActiveComponent}
                  className={activeComponent === "business" ? styles.bold : ""}
                >
                  Business
                </button>
                <button
                  value="reviews"
                  onClick={toggleActiveComponent}
                  className={activeComponent === "reviews" ? styles.bold : ""}
                >
                  Reviews
                </button>
              </div>
              <div className={styles.stroke}></div>
            </div>
            {activeComponent === "" ? (
              <AboutSection about={userData?.payload?.personalDetails?.about} />
            ) : null}
            <div className={styles.backgroundColor}>
              {userData && activeComponent === "" && (
                <Trust_Safety data={userData?.payload.trustAndSafety} />
              )}
              {activeComponent === "" || activeComponent === "business" ? (
                <BusinessCard data={userData?.payload} />
              ) : null}

              {activeComponent === "" || activeComponent === "business" ? (
                <Services data={userData?.payload.primarySpecializations} />
              ) : null}

              {activeComponent === "" && <Gallery />}
              {activeComponent === "" && <Portfolio />}
              {activeComponent === "" || activeComponent === "reviews" ? (
                <RatingSection />
              ) : null}
            </div>
          </div>
          <div className={styles.advertiseWrapper}>
            <RatingCard />
            <Download />
          </div>
        </div>

        <SimilarProfiles data={similarProfiles?.customers} />
        <div className={styles.download}>
          <DownloadApp />
        </div>
        <Footer />
      </div>
      ;
    </div>
  );
};

export default UserProfile;
