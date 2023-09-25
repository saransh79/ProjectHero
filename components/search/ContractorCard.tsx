import { NextPage } from "next";
import styles from "./contracotorCard.module.css";
import { useNavigate } from "react-router-dom";
import Link from "next/link";
import { Customer } from "@/Api's/interface/Users";
import { useEffect, useState } from "react";
import { Payload } from "@/Api's/interface/PersonDetails";
import { fetchUserDetails } from "@/Api's";
import { log } from "console";

interface Iprops {
  userId?: string;
}
const ContractorCard: React.FC<Iprops> = ({ userId }) => {
  const location = useNavigate();
  const [userDetails, setUserDetails] = useState<Payload | null>(null);

  // console.log(userId);
  
  useEffect(() => {
    fetchUserDetails(userId)
      .then((response) => {
        setUserDetails(response.data);
        console.log(userDetails);
        
      })
      .catch((error) => {
        console.error("error while fetching userDetails: ", error);
      });
  }, []);

  return (
    <div
      className={styles.frameParent}
      // onClick={()=> location('/profile')}
    >
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="assets/Rectangle 5660.png"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <div className={styles.patagoniaConstructionsGeneParent}>
                <div className={styles.patagoniaConstructions1}>
                  {userDetails?.personalDetails?.designation} | General Contractor
                </div>
                <div className={styles.ajayVarmaParent}>
                  <div className={styles.ajayVarma}>Ajay Varma</div>
                  <div className={styles.fvParent}>
                    <img className={styles.fvIcon} alt="" src="assets/FV.svg" />
                    <img
                      className={styles.fvIcon}
                      alt=""
                      src="assets/mdi_crown-circle-outline.svg"
                    />
                  </div>
                </div>
                <div className={styles.ceoowner}>CEO/Owner</div>
                <div className={styles.navigationMapPinParent}>
                  <img
                    className={styles.fvIcon}
                    alt=""
                    src="assets/Map_Pin.svg"
                  />
                  <div className={styles.bangaloreKarnataka}>
                    Bangalore, Karnataka
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameParent2}>
                      <div className={styles.wrapper}>
                        <div className={styles.div}>4.5</div>
                      </div>
                      <div className={styles.frameWrapper2}>
                        <div className={styles.interfaceStarParent}>
                          <img
                            className={styles.interfaceStar5}
                            alt=""
                            src="assets/Star.svg"
                          />
                          <img
                            className={styles.interfaceStar5}
                            alt=""
                            src="assets/Star.svg"
                          />
                          <img
                            className={styles.interfaceStar5}
                            alt=""
                            src="assets/Star.svg"
                          />
                          <img
                            className={styles.interfaceStar5}
                            alt=""
                            src="assets/Star.svg"
                          />
                          <img
                            className={styles.interfaceStar5}
                            alt=""
                            src="assets/StarEmpty.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.ratings}>12 Ratings</div>
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
                    <div className={styles.div1}>098765432109876</div>
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
                    <div className={styles.crFy2023}>1.5 - 5 Cr (FY 2023)</div>
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
                    <div className={styles.privateLimited}>Private Limited</div>
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
                    <div className={styles.privateLimited}>11.03.2023</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.ctaParent}>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.projecthero.contractor&hl=en_IN&gl=US"
                  target="_blank"
                  className={styles.cta}
                >
                  <img
                    className={styles.communicationPhone1}
                    alt=""
                    src="assets/Phone.svg"
                  />
                  <div className={styles.whatsapp}>Call</div>
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.projecthero.contractor&hl=en_IN&gl=US"
                  target="_blank"
                  className={styles.cta2}
                >
                  <img
                    className={styles.fvIcon}
                    alt=""
                    src="assets/Whatsapp.svg"
                  />
                  <div className={styles.whatsapp}>Whatsapp</div>
                </Link>
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
    </div>
  );
};

export default ContractorCard;
