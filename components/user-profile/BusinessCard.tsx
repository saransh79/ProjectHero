import {  Payload } from "@/Api's/interface/PersonDetails";
import styles from "./business-card.module.css";
interface Iprops {
  data: Payload;
}
const BusinessCard: React.FC<Iprops> = ({ data }) => {
  // console.log(data);

  return (
    <div className={styles.businessWrapper}>
      <div className={styles.businessCard}>Business Card</div>
      <div className={styles.personalDetailsParent}>
        <div className={styles.personalDetailsWrapper}>
          <div className={styles.personalDetails}>Business Details</div>
        </div>
        <img className={styles.vector} alt="" src="assets/Vector 93.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv}>
              <div className={styles.userPicParent}>
                <img
                  className={styles.userPicIcon}
                  alt=""
                  src={data.personalDetails.profilePicture || "assets/UserProfile.png"}
                />
                <div className={styles.frameParent1}>
                  <div className={styles.patagoniaConstructionsParent}>
                    <b className={styles.patagoniaConstructions}>
                      {data.businessCardDetails.companyName}
                    </b>
                    {data.personalDetails.isVerified && <div className={styles.fvWrapper}>
                      <img
                        className={styles.fvIcon}
                        alt=""
                        src="assets/FV.svg"
                      />
                    </div>}
                  </div>
                  <div className={styles.patagoniaPrivateLimitedWrapper}>
                    <div className={styles.patagoniaPrivateLimited1}>
                      {data.businessCardDetails.gstCompanyName}
                    </div>
                  </div>
                  <div className={styles.generalContractorWrapper}>
                    <div className={styles.generalContractor}>
                      {data.businessCardDetails.organisationSpecializationDetails.root}
                    </div>
                  </div>
                  <div className={styles.bangaloreKarnatakaWrapper}>
                    <div className={styles.generalContractor}>
                      {data.personalDetails.city}, {data.personalDetails.state}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.frameChild} alt="" src="assets/Dividers.png" />

          <div className={styles.frameParent2}>
            <div className={styles.frameParent3}>
              <div className={styles.frameParent4}>
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
                <div className={styles.divParent}>
                  <div className={styles.div}>{data.businessCardDetails.GSTIN}</div>
                  <img src="assets/FV.svg" alt="" />
                </div>
              </div>
              <div className={styles.frameParent4}>
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
                <div className={styles.divParent}>
                  <div className={styles.div}>{data.businessCardDetails.turnover}</div>
                  <img src="assets/FV.svg" alt="" />
                </div>
              </div>
            </div>
            <img
              className={styles.frameChild}
              alt=""
              src="assets/Vector 96.svg"
            />
            <div className={styles.frameParent3}>
              <div className={styles.frameParent4}>
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
                <div className={styles.divParent}>
                  <div className={styles.div}>{data.businessCardDetails.companyType}</div>
                  <img src="assets/FV.svg" alt="" />
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.groupParent}>
                  <div className={styles.ellipseParent}>
                    <div className={styles.ellipseDiv} />
                    <img
                      className={styles.badgeCalendar111}
                      alt=""
                      src="assets/badge-calendar (1) 1.png"
                    />
                  </div>
                  <div className={styles.gstinNo}>
                    <span>Year of Operation</span>
                    <span className={styles.span}>{`: `}</span>
                  </div>
                </div>
                <div className={styles.divParent}>
                  <div className={styles.div}>{data.businessCardDetails.financialYear}</div>
                  <img src="assets/FV.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
