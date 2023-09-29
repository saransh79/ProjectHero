import { useState } from "react";
import { Customer } from "@/Api's/interface/SimilarProfiles";
import styles from "./similar-profiles.module.css";
import Overlay from "../../components/Overlay";
import Link from "next/link";
interface Iprops {
  data?: Customer[];
}
const SimilarProfiles: React.FC<Iprops> = ({ data }) => {
  // const location= useNavigate();

  const [isCardVisible, setCardVisibility] = useState(false);

  const toggleCardVisibility = () => {
    setCardVisibility(!isCardVisible);
  };
  return (
    <div className={styles.listings}>
      <div className={styles.similarProfilesParent}>
        <div className={styles.similarProfile}>Similar Profiles</div>
        <div className={styles.cta}>
          <div className={styles.fieldText1}>View All</div>
          <img
            className={styles.arrowChevronRight1}
            alt=""
            src="assets/Chevron_Right.svg"
          />
        </div>
      </div>

      <div className={styles.similarProfiles}>Similar Profiles</div>
      <div className={styles.buttonMedium}>
        <div className={styles.viewAllContractors1}>View all Contractors</div>
      </div>
      <div className={styles.frameParent}>
        {data?.slice(0, 5).map((profile: Customer, key) => {
          return (
            <div className={styles.profilePhotoParent} key={key}>
              <Link href={`/profile/${profile.userId}`} className={styles.profilePhoto}
              >
                <img
                  className={styles.image487Icon}
                  alt=""
                  src={profile.profilePicture ? profile.profilePicture : "/assets/image 487.png"}
                />
              </Link>
              <div className={styles.frameGroup}>
                <div className={styles.raviKishanParent}>
                  <b className={styles.raviKishan}>{profile.name}</b>
                  {profile.isVerified && <img className={styles.fvIcon} alt="" src="/assets/FV.svg" />}
                </div>
                <div className={styles.raviConstruction}>{profile.companyName}</div>
                <div className={styles.generalContractor}>
                  {profile.rootPersona}
                </div>
                <div className={styles.mumbaiMaharashtra}>
                  {profile.city}, {profile.state}
                </div>
              </div>
              <div className={styles.primaryCta}
              onClick={toggleCardVisibility}>
                <img
                  className={styles.communicationPhone5}
                  alt=""
                  src="/assets/Phone.svg"
                />
                <div className={styles.cta}
                >Contact</div>
              </div>
            </div>
          );
        })}
      </div>
      {isCardVisible && <Overlay
      isCardVisible={isCardVisible}
      setCardVisibility={setCardVisibility}/>}
    </div>
  );
};

export default SimilarProfiles;
