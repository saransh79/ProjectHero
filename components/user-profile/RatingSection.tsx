import type { NextPage } from "next";
import styles from "./rating-section.module.css";
import Viewmore from "../Viewmore";
const RatingSection: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.detailsParent}>
        <div className={styles.details}>
          <div className={styles.ratingsReviews1}>{`Ratings & Reviews`}</div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper1}>
                <div className={styles.interfaceStarParent}>
                  <img
                    className={styles.interfaceStar20}
                    alt=""
                    src="assets/Star.svg"
                  />
                  <img
                    className={styles.interfaceStar20}
                    alt=""
                    src="assets/Star.svg"
                  />
                  <img
                    className={styles.interfaceStar20}
                    alt=""
                    src="assets/Star.svg"
                  />
                  <img
                    className={styles.interfaceStar20}
                    alt=""
                    src="assets/Star.svg"
                  />
                  <img
                    className={styles.interfaceStar20}
                    alt=""
                    src="assets/StarEmpty.svg"
                  />
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.div}>4.5</div>
              </div>
            </div>
            <div className={styles.globalRatings}>out of 5</div>
          </div>
        </div>
        <div className={styles.globalRatings}>15 global ratings</div>
      </div>
      <div className={styles.frameParent1}>
        
        <div className={styles.woremIpsumDolorSitAmetCoParent}>
          <div className={styles.irfanKhan}>Ajay Pal</div>
          
          <div className={styles.frameWrapper1}>
            <div className={styles.interfaceStarParent}>
              <img
                className={styles.interfaceStar21}
                alt=""
                src="assets/Star.svg"
              />
              <img
                className={styles.interfaceStar21}
                alt=""
                src="assets/Star.svg"
              />
              <img
                className={styles.interfaceStar21}
                alt=""
                src="assets/Star.svg"
              />
              <img
                className={styles.interfaceStar21}
                alt=""
                src="assets/Star.svg"
              />
              <img
                className={styles.interfaceStar21}
                alt=""
                src="assets/StarEmpty.svg"
              />
            </div>
          </div>
          <div
            className={styles.woremIpsumDolor3}
          >{`Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. `}</div>
          <div className={styles.postedOn123}>Posted on: 12 Jan, 2022</div>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.woremIpsumDolorSitAmetCoParent}>
          <div className={styles.irfanKhan}>Ajay Pal</div>
          
          <div className={styles.frameWrapper1}>
            <div className={styles.interfaceStarParent}>
              <img
                className={styles.interfaceStar21}
                alt=""
                src="assets/Star.svg"
              />
              <img
                className={styles.interfaceStar21}
                alt=""
                src="assets/Star.svg"
              />
              <img
                className={styles.interfaceStar21}
                alt=""
                src="assets/Star.svg"
              />
              <img
                className={styles.interfaceStar21}
                alt=""
                src="assets/Star.svg"
              />
              <img
                className={styles.interfaceStar21}
                alt=""
                src="assets/StarEmpty.svg"
              />
            </div>
          </div>
          <div
            className={styles.woremIpsumDolor3}
          >{`Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. `}</div>
          <div className={styles.postedOn123}>Posted on: 12 Jan, 2022</div>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.woremIpsumDolorSitAmetCoParent}>
          <div className={styles.irfanKhan}>Ajay Pal</div>
          
          <div className={styles.frameWrapper1}>
            <div className={styles.interfaceStarParent}>
              <img
                className={styles.interfaceStar21}
                alt=""
                src="assets/Star.svg"
              />
              <img
                className={styles.interfaceStar21}
                alt=""
                src="assets/Star.svg"
              />
              <img
                className={styles.interfaceStar21}
                alt=""
                src="assets/Star.svg"
              />
              <img
                className={styles.interfaceStar21}
                alt=""
                src="assets/Star.svg"
              />
              <img
                className={styles.interfaceStar21}
                alt=""
                src="assets/StarEmpty.svg"
              />
            </div>
          </div>
          <div
            className={styles.woremIpsumDolor3}
          >{`Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. `}</div>
          <div className={styles.postedOn123}>Posted on: 12 Jan, 2022</div>
        </div>
        <div className={styles.lineDiv} />

        <div className={styles.Viewmore}>
          <Viewmore />
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
