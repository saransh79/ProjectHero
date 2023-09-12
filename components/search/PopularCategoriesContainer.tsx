import type { NextPage } from "next";
import styles from "./popular-categories-container.module.css";
import Download from "./Download";
import ContractorCard from "./ContractorCard";
import PopularCategories from "./PopularCategories";
import Viewmore from "../Viewmore";
import LocationContainer from "./LocationContainer";
import FilterContainer from "./FilterContainer";
const PopularCategoriesContainer: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={`${styles.frameGroup}`}>
      <PopularCategories />
      </div>

      <div className={styles.frameGroup}>
        <div className={styles.topBuildingContractorsWrapper}>
          <div className={styles.popularCategories}>
            Top Building Contractors
          </div>
        </div>

        <ContractorCard />
      </div>
      <div className={styles.frameGroup}>

      <Download />
      </div>

      <Viewmore />
    </div>
  );
};

export default PopularCategoriesContainer;
