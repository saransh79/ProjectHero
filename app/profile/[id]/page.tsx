"use client";
import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar1";
import AboutSection from "@/app/profile/components/About";
import BusinessCard from "@/app/profile/components/BusinessCard";
import Download from "@/app/profile/components/DownloadCard";
import DownloadApp from "@/app/components/Download";
import Gallery from "@/app/profile/components/Gallery";
import HeroSection from "@/app/profile/components/HeroSection";
import Portfolio from "@/app/profile/components/PortFolio";
import RatingCard from "@/app/profile/components/RatingCard";
import RatingSection from "@/app/profile/components/RatingSection";
import Services from "@/app/profile/components/Services";
import SimilarProfiles from "@/app/profile/components/SimilarProfiles";
import Trust_Safety from "@/app/profile/components/Trust-safety";
import styles from "./style.module.css";
import Footer from "@/app/components/Footer";
import { Root } from "@/Api's/interface/PersonDetails";
import { fetchSimilarProfiles, fetchUserDetails } from "@/Api's";
import { Payload } from "@/Api's/interface/SimilarProfiles";
import { usePathname } from "next/navigation";

const UserProfile: React.FC = () => {
  const url = usePathname();
  const segments = url ? url.split("/") : [];
  const lastSegment = segments.length > 0 ? segments[segments.length - 1] : "";
  // console.log(lastSegment);

  const [activeComponent, setActiveComponent] = useState<string | null>("");
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
  const [userData, setUserData] = useState<Root | null>(null);
  const [similarProfiles, setSimilarProfiles] = useState<Payload | null>(null);
  const toggleActiveComponent = (e: any) => {
    setActiveComponent(e.target.value);
  };
  useEffect(() => {
    fetchUserDetails(lastSegment)
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
  }, []);

  return (
    <div>
      <div className={styles.navbar_wrapper}>
        <Navbar showSearchBox={showSearchBox} />
      </div>
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
              {userData?.payload.personalDetails.userType !== "customer" && (
                <button
                  value="business"
                  onClick={toggleActiveComponent}
                  className={activeComponent === "business" ? styles.bold : ""}
                >
                  Business
                </button>
              )}
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
          {activeComponent === "" &&
            userData?.payload.personalDetails?.about && (
              <div className={styles.about}>
                <AboutSection
                  about={userData?.payload?.personalDetails?.about}
                />
              </div>
            )}
          <div className={styles.backgroundColor}>
            {userData && activeComponent === "" && (
              <div>
                <Trust_Safety data={userData?.payload.trustAndSafety} />
              </div>
            )}

            {userData?.payload.businessCardDetails &&
              (activeComponent === "" || activeComponent === "business" ? (
                <div>
                  <BusinessCard data={userData?.payload} />
                </div>
              ) : null)}

            {userData?.payload.primarySpecializations[0] &&
              (activeComponent === "" || activeComponent === "business" ? (
                <div>
                  <Services data={userData?.payload.primarySpecializations} />
                </div>
              ) : null)}

            {/* {activeComponent === "" && <Gallery />}
              {activeComponent === "" && <Portfolio />} */}
            {activeComponent === "" || activeComponent === "reviews" ? (
              <div>
                <RatingSection />
              </div>
            ) : null}
          </div>
        </div>
        <div className={styles.advertiseWrapper}>
          <RatingCard userId={userData?.payload.personalDetails.userId} />
          <Download />
        </div>
      </div>

      <SimilarProfiles data={similarProfiles?.customers} />
      <div className={styles.download}>
        <DownloadApp />
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
