// import { NextPage } from "next";
import styles from "./contracotorCard.module.css";
import { useNavigate } from "react-router-dom";
import Link from "next/link";
import { PersonalDetails } from "@/Api's/interface/Users";
import { useEffect, useState } from "react";

import { fetchUserDetails } from "@/Api's";
// import { log } from "console";
import { Payload } from "@/Api's/interface/PersonDetails";
import { Rating } from "@mui/material";
import Overlay from "../Overlay";

interface Iprops {
  data: PersonalDetails;
}

const ContractorCard: React.FC<Iprops> = ({ data }) => {
  const location = useNavigate();
  const [userDetails, setUserDetails] = useState<Payload>();
  const [isCardVisible, setCardVisibility] = useState(false);

  const toggleCardVisibility = () => {
    setCardVisibility(!isCardVisible);
  };
  // console.log(data);

  useEffect(() => {
    fetchUserDetails(data.userId)
      .then((response) => {
        setUserDetails(response.data.payload);
        // console.log(userDetails);
      })
      .catch((error) => {
        console.error("error while fetching userDetails: ", error);
      });
  }, []);

  return (
    <div
      className={styles.frameParent}
    >
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          alt=""
          src={userDetails?.personalDetails.profilePicture ? userDetails.personalDetails.profilePicture : "assets/Rectangle 5660.png"}
          onClick={()=>location(`/profile/${data.userId}`)}
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <div className={styles.patagoniaConstructionsGeneParent}>
                <div className={styles.patagoniaConstructions1}>
                  {data.companyName} |
                  {userDetails?.personalDetails.designation}
                </div>
                <div className={styles.ajayVarmaParent}>
                  <div className={styles.ajayVarma}>
                    {userDetails?.personalDetails.name}
                  </div>
                  <div className={styles.fvParent}>
                    {userDetails?.personalDetails.isVerified && (
                      <img
                        className={styles.fvIcon}
                        alt=""
                        src="assets/FV.svg"
                      />
                    )}
                    {userDetails?.personalDetails.isMember && (
                      <img
                        className={styles.fvIcon}
                        alt=""
                        src="assets/mdi_crown-circle-outline.svg"
                      />
                    )}
                  </div>
                </div>
                <div className={styles.ceoowner}>{userDetails?.personalDetails.designation}</div>
                <div className={styles.navigationMapPinParent}>
                  <img
                    className={styles.fvIcon}
                    alt=""
                    src="assets/Map_Pin.svg"
                  />
                  <div className={styles.bangaloreKarnataka}>
                    {data.city}, {data.state}
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameParent2}>
                      <div className={styles.wrapper}>
                        <div className={styles.div}>{data.rating}</div>
                      </div>
                      <div className={styles.frameWrapper2}>
                        <div className={styles.interfaceStarParent}>
                          
                        <Rating
                    name="half-rating-read"
                    defaultValue={Math.ceil(parseInt(data.rating))}
                    precision={0.5}
                    readOnly
                  />
                        </div>
                      </div>
                    </div>
                    <div className={styles.ratings}>{data.reviewsCount} Ratings</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent5}>
                    <div className={styles.groupParent}>
                      <div className={styles.ellipseParent}>
                        <div className={styles.groupChild} />
                        <img
                          className={styles.taxPercentageIcon1}
                          alt=""
                          src="assets/Tax Percentage.png"
                        />
                      </div>
                      <div className={styles.gstinNo}>
                        <span>GSTIN No</span>
                        <span className={styles.span}>{`: `}</span>
                      </div>
                    </div>
                    <div className={styles.div1}>{userDetails?.businessCardDetails?.GSTIN}</div>
                  </div>
                  <div className={styles.frameParent5}>
                    <div className={styles.groupParent}>
                      <div className={styles.ellipseParent}>
                        <div className={styles.groupItem} />
                        <img
                          className={styles.rupeeWallet111}
                          alt=""
                          src="assets/rupee-wallet (1) 1.png"
                        />
                      </div>
                      <div className={styles.gstinNo}>
                        <span>Turnover</span>
                        <span className={styles.span}>{`: `}</span>
                      </div>
                    </div>
                    <div className={styles.crFy2023}>{userDetails?.businessCardDetails?.turnover}</div>
                  </div>
                </div>

                <div className={styles.frameDiv}>
                  <div className={styles.frameParent5}>
                    <div className={styles.groupParent}>
                      <div className={styles.ellipseParent}>
                        <div className={styles.groupInner} />
                        <img
                          className={styles.companyBuildingIcon1}
                          alt=""
                          src="assets/Company Building.png"
                        />
                      </div>
                      <div className={styles.gstinNo}>
                        <span>Company Type</span>
                        <span className={styles.span}>{`: `}</span>
                      </div>
                    </div>
                    <div className={styles.privateLimited}>{userDetails?.businessCardDetails?.companyType}</div>
                  </div>
                  <div className={styles.frameParent5}>
                    <div className={styles.groupParent}>
                      <div className={styles.ellipseParent}>
                        <div className={styles.groupInner} />
                        <img
                          className={styles.companyBuildingIcon1}
                          alt=""
                          src="assets/badge-calendar (1) 1.png"
                        />
                      </div>
                      <div className={styles.gstinNo}>
                        <span>Year of Operation</span>
                        <span className={styles.span}>{`: `}</span>
                      </div>
                    </div>
                    <div className={styles.privateLimited}>{userDetails?.businessCardDetails?.financialYear}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.ctaParent}>
                <button
                onClick={toggleCardVisibility}
                  className={styles.cta}
                >
                  <img
                    className={styles.communicationPhone1}
                    alt=""
                    src="assets/Phone.svg"
                  />
                  <div className={styles.whatsapp}>Call</div>
                </button>
                <button
                  onClick={toggleCardVisibility}
                  className={styles.cta2}
                >
                  <img
                    className={styles.fvIcon}
                    alt=""
                    src="assets/Whatsapp.svg"
                  />
                  <div className={styles.whatsapp}>Whatsapp</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        href={`https://api.whatsapp.com/send?text=${""}`}
        className={styles.whatsapp1Parent}
      >
        <img
          className={styles.whatsapp1Icon1}
          alt=""
          src="assets/Whatsapp.svg"
        />
        <div className={styles.bangaloreKarnataka}>Share Profile</div>
        <img
          className={styles.communicationShareAndroid1}
          alt=""
          src="assets/Share_Android.svg"
        />
      </Link>

      {isCardVisible && <Overlay
      isCardVisible={isCardVisible}
      setCardVisibility= {setCardVisibility}
      />}
    </div>
  );
};

export default ContractorCard;
