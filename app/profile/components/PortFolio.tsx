import styles from "./portfolio.module.css";
import Viewmore from "../../components/Viewmore";
const Portfolio = () => {
  return (
    <div className={styles.detailsParent}>
      <div className={styles.details}>
        <div className={styles.portfolio}>Portfolio</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.productCardParent}>
            <div className={styles.productCard}>
              <div className={styles.details}>
                <div className={styles.details}>
                  <div className={styles.abcConstructionParent}>
                    <div className={styles.abcConstructions}>
                      ABC Construction
                    </div>
                    <div className={styles.badgesParent}>
                      <div className={styles.badges}>
                        <div className={styles.poweredByProjectHeroLogo2}>
                          <img
                            className={styles.phNewLogo}
                            alt=""
                            src="/assets/PH New Logo.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.groupChild} />
                      <img
                        className={styles.tickIcon2}
                        alt=""
                        src="/assets/Tick.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.labourContractor}>Labour Contractor</div>
            <div className={styles.orderValue50000Wrapper}>
              <div className={styles.orderValueContainer}>
                <span className={styles.orderValueContainer1}>
                  <span>Order Value:</span>
                  <b className={styles.b}>{` `}</b>
                  <span className={styles.span}>₹ 50,000</span>
                </span>
              </div>
            </div>
            <div className={`${styles.orderValue50000Wrapper} ${styles.date}`}>
              <div className={styles.orderValueContainer}>
                <span className={styles.orderValueContainer1}>
                  <span>Date:</span>
                  <b className={styles.b}>{` `}</b>
                  <span className={styles.span}>March 2023</span>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.bangaloreKarnatakaParent}>
            <div className={styles.bangaloreKarnataka}>
              {" "}
              Bangalore, Karnataka
            </div>
            <img
              className={styles.locationIcon3}
              alt=""
              src="/assets/Location.svg"
            />
          </div>
          <div className={styles.loremIpsumDolor3}>
            Lorem ipsum dolor sit amet. Aut neque error et reprehenderit.
          </div>
        </div>
        <div className={styles.dividers}>
          <div className={styles.dividersChild} />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.productCardParent}>
            <div className={styles.productCard}>
              <div className={styles.details}>
                <div className={styles.details}>
                  <div className={styles.abcConstructionParent}>
                    <div className={styles.abcConstructions}>
                      ABC Construction
                    </div>
                    <div className={styles.badgesParent}>
                      <div className={styles.badges}>
                        <div className={styles.poweredByProjectHeroLogo2}>
                          <img
                            className={styles.phNewLogo}
                            alt=""
                            src="/assets/PH New Logo.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.groupChild} />
                      <img
                        className={styles.tickIcon2}
                        alt=""
                        src="/assets/Tick.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.labourContractor}>Labour Contractor</div>
            <div className={styles.orderValue50000Wrapper}>
              <div className={styles.orderValueContainer}>
                <span className={styles.orderValueContainer1}>
                  <span>Order Value:</span>
                  <b className={styles.b}>{` `}</b>
                  <span className={styles.span}>₹ 50,000</span>
                </span>
              </div>
            </div>
            <div className={`${styles.orderValue50000Wrapper} ${styles.date}`}>
              <div className={styles.orderValueContainer}>
                <span className={styles.orderValueContainer1}>
                  <span>Date:</span>
                  <b className={styles.b}>{` `}</b>
                  <span className={styles.span}>March 2023</span>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.bangaloreKarnatakaParent}>
            <div className={styles.bangaloreKarnataka}>
              {" "}
              Bangalore, Karnataka
            </div>
            <img
              className={styles.locationIcon3}
              alt=""
              src="/assets/Location.svg"
            />
          </div>
          <div className={styles.loremIpsumDolor3}>
            Lorem ipsum dolor sit amet. Aut neque error et reprehenderit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
