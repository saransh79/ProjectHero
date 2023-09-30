import React from "react";
import styles from "./overlay.module.css";
import Link from "next/link";

interface Iprops {
  isCardVisible?: boolean;
  setCardVisibility?: any;
}
const Overlay: React.FC<Iprops> = ({ isCardVisible, setCardVisibility }) => {
  const toggleCardVisibility = () => {
    setCardVisibility(!isCardVisible);
  };

  return (
    <div className={styles.container} onClick={toggleCardVisibility}>
      <div className={styles.card}>
        {isCardVisible && (
          <div>
            <div className={styles.cross}
            onClick={toggleCardVisibility}></div>
            <Link href="https://play.google.com/store/apps/details?id=com.projecthero.contractor&hl=en_IN&gl=US">
              <img
                src="/assets/overlay.jpeg"
                alt="overlay"
                className={styles.horizontal}
              />
              <img
                src="/assets/overlay2.jpeg"
                alt="overlay"
                className={styles.vertical}
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overlay;
