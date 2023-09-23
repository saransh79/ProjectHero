import { NextPage } from "next";
import { useState, useEffect } from "react";
import styles from "./popular-categories-container.module.css";
import Download from "../Download";
import ContractorCard from "./ContractorCard";
import PopularCategories from "./PopularCategories";
import Viewmore from "../Viewmore";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getContractors } from "@/redux/slice/contractors";
import { fetchAllUsers } from "@/Api's";

const PopularCategoriesContainer: NextPage = () => {
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    fetchAllUsers(category).then(response=>{});
  }, [category]);

  return (
    <div className={styles.frameParent}>
      <div className={`${styles.frameGroup}`}>
        <PopularCategories 
        category={category}
        setCategory= {setCategory}/>
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
