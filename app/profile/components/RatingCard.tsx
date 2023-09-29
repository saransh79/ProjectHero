import Link from "next/link";
import styles from "./rating-card.module.css";

interface Iprops{
  userId?: string;
}
const RatingCard: React.FC<Iprops> = ({userId}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.addYourRatingParent}>
        <b className={styles.addYourRating1}>Add Your Rating</b>
        <div className={styles.lessThan2MinParent}>
          <div className={styles.anonymus}>Less than 2 min</div>
          <div className={styles.frameChild} />
          <div className={styles.anonymus}>100% anonymus</div>
        </div>
      </div>
      <div className={styles.labelParent}>
        <div className={styles.label}>
          <p
            className={styles.howWasYour}
          >{`How was your payment experience `}</p>
          <p className={styles.howWasYour}>
            <span>with</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.patagoniaConstructions}>
              Patagonia Constructions
            </span>
          </p>
        </div>
        <div className={styles.inputfield}>
          <div className={styles.icInput1} />
          <div className={styles.veryBad}>ex : yourname@gmail.com</div>
        </div>
        <div className={styles.interfaceStarParent}>
          <img
            className={styles.interfaceStar5}
            alt=""
            src="/assets/Star.png"
          />
          <img
            className={styles.interfaceStar5}
            alt=""
            src="/assets/Star.png"
          />
          <img
            className={styles.interfaceStar5}
            alt=""
            src="/assets/Star.png"
          />
          <img
            className={styles.interfaceStar5}
            alt=""
            src="/assets/Star.png"
          />
          <img
            className={styles.interfaceStar5}
            alt=""
            src="/assets/Star.png"
          />
        </div>
        <div className={styles.veryBadParent}>
          <div className={styles.veryBad}>Very bad</div>
          <div className={styles.veryBad}>Very good</div>
        </div>
      </div>
      <div className={styles.ctaParent}>
        <Link href={`/addRating/${userId}`} className={styles.cta}
        >
          <div className={styles.cta1}>Rate this Company</div>
        </Link>
        <div className={styles.weWillNever1}>
          We will never share your name and number
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
