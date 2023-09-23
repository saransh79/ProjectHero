import type { NextPage } from "next";
import styles from "./popular-categories.module.css";

interface Iprops {
  category: string | null;
  setCategory: any;
}
const PopularCategories: React.FC<Iprops> = ({ category, setCategory }) => {
  const selectCategory = (e: any) => {
    setCategory(e.target.value);
  };
  return (
    <div className={styles.frameParent}>
      <div className={styles.popularCategories}>Popular Categories</div>
      <div className={styles.radioButtonParent}>
        <button
          value="SUB_CONTRACTOR"
          onClick={selectCategory}
          className={styles.radioButtonWrapper}
          style={{
            backgroundColor: category === "SUB_CONTRACTOR"? '#fafafa': '#fff'
          }}
        >
          <div className={styles.radioButton}>
            <div className={styles.imageWrapper}>
              <img alt="sub-contractor" src="/assets/SC.png" />
            </div>

            <div className={styles.fieldText}>Sub Contractor</div>
            <div className={styles.label}>
              Execute trade wise contracts mostly with materials
            </div>
          </div>
        </button>

        <button
          value="GENERAL_CONTRACTOR"
          onClick={selectCategory}
          className={styles.radioButtonWrapper}
          style={{
            backgroundColor: category === "GENERAL_CONTRACTOR"? '#fafafa': '#fff'
          }}
        >
          <div className={styles.radioButton}>
            <div className={styles.imageWrapper}>
              <img alt="General contractor" src="/assets/GC.png" />
            </div>
            <div className={styles.fieldText}>General Contractor</div>
            <div className={styles.label}>
              Execute turnkey projects & work directly with the Client
            </div>
          </div>
        </button>

        <button
          value="ARCHITECT_OR_INTERIOR_DESIGNER"
          onClick={selectCategory}
          className={styles.radioButtonWrapper}
          style={{
            backgroundColor: category === "ARCHITECT_OR_INTERIOR_DESIGNER"? '#fafafa': '#fff'
          }}
        >
          <div className={styles.radioButton}>
            <div className={styles.imageWrapper}>
              <img alt="" src="/assets/ID.png" />
            </div>

            <div className={styles.fieldText}>
              Architect / Interior Designer
            </div>
            <div className={styles.label}>
              Offer Architectural & Interior designing services
            </div>
          </div>
        </button>
        <button
          value="LABOUR_CONTRACTOR_OR_SUPPLIER"
          onClick={selectCategory}
          className={styles.radioButtonWrapper}
          style={{
            backgroundColor: category === "LABOUR_CONTRACTOR_OR_SUPPLIER"? '#fafafa': '#fff'
          }}
        >
          <div className={styles.radioButton}>
            <div className={styles.imageWrapper}>
              <img alt="" src="/assets/LC.png" />
            </div>

            <div className={styles.fieldText}>Labour Contractor / Supplier</div>
            <div className={styles.label}>
              Provide workers on measurement or daily wage basis
            </div>
          </div>
        </button>

        <button
          value="PMC_OR_CONSULTANTS"
          onClick={selectCategory}
          className={styles.radioButtonWrapper}
          style={{
            backgroundColor: category === "PMC_OR_CONSULTANTS"? '#fafafa': '#fff'
          }}
        >
          <div className={styles.radioButton}>
            <div className={styles.imageWrapper}>
              <img alt="" src="/assets/PMC.png" />
            </div>

            <div className={styles.fieldText}>PMC / Consultants</div>
            <div className={styles.label}>
              Provide Project Management Consultancy & other services
            </div>
          </div>
        </button>

        <button
          value="CUSTOMER"
          onClick={selectCategory}
          className={styles.radioButtonWrapper}
          style={{
            backgroundColor: category === "CUSTOMER"? '#fafafa': '#fff'
          }}
        >
          <div className={styles.radioButton}>
            <div className={styles.imageWrapper}>
              <img alt="" src="/assets/C.png" />
            </div>

            <div className={styles.fieldText}>Customer</div>
            <div className={styles.label}>
              Want to get my project or work done
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PopularCategories;
