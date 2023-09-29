// import { NextPage } from "next";
import { useState, useEffect } from "react";
import styles from "./popular-categories-container.module.css";
import Download from "../../components/Download";
import ContractorCard from "./ContractorCard";
import PopularCategories from "./PopularCategories";
import Viewmore from "../../components/Viewmore";
import { Customer, Payload } from "@/Api's/interface/Users";
import { fetchAllUsers } from "@/Api's";
import { Pagination } from "@mui/material";

interface Iprops {
  selectedRootCategory?: string;
  setSelectedRootCategory: any;
  selectedPrimaryCategories: string[];
  setSelectedPrimaryCategories: any;
  location?: string;
  searchText?: string;
}
const PopularCategoriesContainer: React.FC<Iprops> = ({
  selectedRootCategory,
  setSelectedRootCategory,
  selectedPrimaryCategories,
  location,
  searchText
}) => {

  
  const [customers, setCustomers] = useState<Payload | null>(null);

  const [pageNumber, setPageNumber] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [shouldRunEffect, setShouldRunEffect] = useState(false);
  useEffect(()=>{
    setShouldRunEffect(prev=>!prev);
  },[selectedRootCategory, selectedPrimaryCategories, pageNumber, pageSize, location, searchText])

  useEffect(() => {
    // console.log(location);
    // console.log(searchText);
    // console.log(selectedRootCategory)
    // console.log(selectedPrimaryCategories);


    fetchAllUsers(selectedRootCategory, selectedPrimaryCategories, pageSize, pageNumber, location, searchText)
      .then((response: any) => {
        setCustomers(response.data.payload);
        setPageNumber(parseInt(response.data.payload.pageNumber));
        setPageSize(parseInt(response.data.payload.pageSize));
        setHasMore(response.data.payload.hasMore);
      })
      .catch((error: string) => {
        console.error("error while fetching customers: ", error);
      });
  }, [shouldRunEffect]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPageNumber(newPage);
  };

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

        {customers?.customers?.map((customer, key) => {
          return <ContractorCard data={customer} key={key}/>;
        })}

<div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Pagination
            count={5}
            page={pageNumber}
            onChange={handlePageChange}
            disabled={!hasMore}
            color="primary"
            variant="outlined"
            shape="rounded"
          />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <Download />
      </div>

      <Viewmore />
    </div>
  );
};

export default PopularCategoriesContainer;