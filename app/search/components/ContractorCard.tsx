"use client";
import styles from "./contracotorCard.module.css";
import Link from "next/link";
import { useState } from "react";
import { Rating } from "@mui/material";
import Overlay from "../../components/Overlay";

interface Iprops {
  data: any;
  rootCategory?: string;
}
const ContractorCard: React.FC<Iprops> = ({ data, rootCategory }) => {
  const [isCardVisible, setCardVisibility] = useState(false);

  const toggleCardVisibility = () => {
    setCardVisibility(!isCardVisible);
  };
  const shareProfile = () => {
    const currentURL = window.location.href;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(currentURL)}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <Link href={`/profile/${data?.personalDetails.userId}`}>
          <img
            className={styles.frameChild}
            alt=""
            src={
              data?.personalDetails.profilePicture
                ? data?.personalDetails.profilePicture
                : "/assets/Rectangle 5660.png"
            }
          />
        </Link>

        <div className={styles.frameWrapper}>
          <div className={styles.frameDiv}>
            <div className={styles.patagoniaConstructionsGeneParent}>
              <div className={styles.patagoniaConstructions1}>
                {data?.personalDetails?.companyName}
                {rootCategory && <span> | </span>}
                {rootCategory}
              </div>
              <div className={styles.ajayVarmaParent}>
                <div
                  className={`${styles.ajayVarma} ${
                    data?.personalDetails.userType === "customer" &&
                    !data.personalDetails.companyName
                      ? styles.customer_name
                      : ""
                  }`}
                >
                  {data?.personalDetails?.name}
                </div>
                <div className={styles.fvParent}>
                  {data?.personalDetails?.isVerified && (
                    <img
                      className={styles.fvIcon}
                      alt=""
                      src="/assets/FV.svg"
                    />
                  )}
                  {data?.personalDetails.isMember && (
                    <img
                      className={styles.fvIcon}
                      alt=""
                      src="/assets/mdi_crown-circle-outline.svg"
                    />
                  )}
                </div>
              </div>
              <div className={`${styles.ceoowner}`}>
                {data?.personalDetails.designation}
              </div>
              {data?.personalDetails.state && (
                <div className={styles.navigationMapPinParent}>
                  <img
                    className={styles.fvIcon}
                    alt=""
                    src="/assets/Map_Pin.svg"
                  />
                  <div className={styles.location}>
                    {data?.personalDetails.city}, {data?.personalDetails.state}
                  </div>
                </div>
              )}
              <div className={styles.frameWrapper1}>
                <div className={styles.div}>
                  {data?.personalDetails?.rating
                    ? data?.personalDetails?.rating
                    : "0.0"}
                </div>
                <div className={styles.interfaceStarParent}>
                  <Rating
                    name="half-rating-read"
                    value={Math.ceil(parseInt(data?.personalDetails?.rating))}
                    precision={0.5}
                    readOnly
                  />
                </div>
                <div className={styles.ratings}>
                  {data?.personalDetails?.reviewsCount} Ratings
                </div>
              </div>
            </div>

            <div className={styles.frameParent3}>
              {data?.businessCardDetails?.GSTIN && (
                <div className={styles.frameParent5}>
                  <div className={styles.groupParent}>
                    <div className={styles.ellipseParent}>
                      <img
                        className={styles.taxPercentageIcon1}
                        alt=""
                        src="/assets/Tax Percentage.png"
                      />
                    </div>
                    <div>GSTIN No:</div>
                  </div>
                  <div className={styles.bold}>
                    {data?.businessCardDetails?.GSTIN}
                  </div>
                </div>
              )}

              {data?.businessCardDetails?.companyType && (
                <div className={styles.frameParent5}>
                  <div className={styles.groupParent}>
                    <div className={styles.ellipseParent}>
                      <img alt="" src="/assets/Company Building.png" />
                    </div>
                    <div>Company Type:</div>
                  </div>
                  <div className={styles.bold}>
                    {data?.businessCardDetails?.companyType}
                  </div>
                </div>
              )}

              {data?.businessCardDetails?.turnover && (
                <div className={styles.frameParent5}>
                  <div className={styles.groupParent}>
                    <div className={styles.ellipseParent}>
                      <img alt="" src="/assets/Tax Percentage.png" />
                    </div>
                    <div>Turnover:</div>
                  </div>
                  <div className={styles.bold}>
                    {data?.businessCardDetails?.turnover}
                  </div>
                </div>
              )}

              {data?.businessCardDetails?.financialYear && (
                <div className={styles.frameParent5}>
                  <div className={styles.groupParent}>
                    <div className={styles.ellipseParent}>
                      <img alt="" src="/assets/Tax Percentage.png" />
                    </div>
                    <div>Year of Operation:</div>
                  </div>
                  <div className={styles.bold}>
                    {data?.businessCardDetails?.financialYear}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={styles.ctaParent}>
            <button onClick={toggleCardVisibility} className={styles.cta}>
              <img
                className={styles.communicationPhone1}
                alt=""
                src="/assets/Phone.svg"
              />
              <div className={styles.whatsapp}>Call</div>
            </button>
            <button onClick={toggleCardVisibility} className={styles.cta2}>
              <img
                className={styles.fvIcon}
                alt=""
                src="/assets/Whatsapp.svg"
              />
              <div className={styles.whatsapp}>Whatsapp</div>
            </button>
          </div>
        </div>
      </div>
      <div onClick={shareProfile} className={styles.whatsapp1Parent}>
        <div className={styles.bangaloreKarnataka}>Share Profile</div>
        <div className={styles.bangaloreKarnatakaMobile}>Share</div>
        <img
          className={styles.communicationShareAndroid1}
          alt=""
          src="/assets/Share_Android.svg"
        />
      </div>

      {isCardVisible && (
        <Overlay
          isCardVisible={isCardVisible}
          setCardVisibility={setCardVisibility}
        />
      )}
    </div>
  );
};

export default ContractorCard;
