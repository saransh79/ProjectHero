import type { NextPage } from "next";
import styles from "./gallery.module.css";
const Gallery: NextPage = () => {
  return (
    <div className={styles.detailsParent}>
      <div className={styles.details}>
        <div className={styles.gallery}>Gallery</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.productCardWrapper}>
          <div className={styles.productCardWrapper}>
            <div className={styles.parent}>
              <div className={styles.photo}>
                <img className={styles.image6Icon} alt="" src="assets/image 6.png" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productCardWrapper}>
          <div className={styles.productCardWrapper}>
            <div className={styles.parent}>
              <div className={styles.photo}>
                <img className={styles.image7Icon} alt="" src="assets/image 7.png" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productCardWrapper}>
          <div className={styles.productCardWrapper}>
            <div className={styles.parent}>
              <div className={styles.photo}>
                <img className={styles.image8Icon} alt="" src="assets/image 8.png" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productCardWrapper}>
          <div className={styles.productCardWrapper}>
            <div className={styles.parent}>
              <div className={styles.photo}>
                <img className={styles.image7Icon} alt="" src="assets/image 7.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.productCardWrapper}>
          <div className={styles.productCardWrapper}>
            <div className={styles.parent}>
              <div className={styles.photo}>
                <img className={styles.image7Icon} alt="" src="assets/image 7.png" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productCardWrapper}>
          <div className={styles.productCardWrapper}>
            <div className={styles.parent}>
              <div className={styles.photo}>
                <img className={styles.image8Icon} alt="" src="assets/image 8.png" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productCardWrapper}>
          <div className={styles.productCardWrapper}>
            <div className={styles.parent}>
              <div className={styles.photo}>
                <img className={styles.image7Icon} alt="" src="assets/image 7.png" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productCardWrapper}>
          <div className={styles.productCardWrapper}>
            <div className={styles.parent}>
              <div className={styles.photo}>
                <img className={styles.image6Icon} alt="" src="assets/image 6.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
