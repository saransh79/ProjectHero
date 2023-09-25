import { NextPage } from "next";
import { useState, useEffect } from "react";
import styles from "./popular-categories-container.module.css";
import Download from "../Download";
import ContractorCard from "./ContractorCard";
import PopularCategories from "./PopularCategories";
import Viewmore from "../Viewmore";
import { Customer } from "@/Api's/interface/Users";

interface Iprops {
  customers?: Customer[];
  selectedRootCategory: string;
  setSelectedRootCategory: any;
}
const PopularCategoriesContainer: React.FC<Iprops> = ({
  customers,
  selectedRootCategory,
  setSelectedRootCategory,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={`${styles.frameGroup}`}>
        <PopularCategories
          selectedRootCategory={selectedRootCategory}
          setSelectedRootCategory={setSelectedRootCategory}
        />
      </div>

      <div className={styles.frameGroup}>
        <div className={styles.topBuildingContractorsWrapper}>
          <div className={styles.popularCategories}>
            Top Building Contractors
          </div>
        </div>

        {customers?.map((customer)=>{
          return(
            <ContractorCard userId={customer.userId} />
          )
        })}
      </div>
      <div className={styles.frameGroup}>
        <Download />
      </div>

      <Viewmore />
    </div>
  );
};

export default PopularCategoriesContainer;
