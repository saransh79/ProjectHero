// import { NextPage } from "next";
import { useState, useEffect } from "react";
import styles from "./popular-categories-container.module.css";
import Download from "../Download";
import ContractorCard from "./ContractorCard";
import PopularCategories from "./PopularCategories";
import Viewmore from "../Viewmore";
import { Customer, Payload } from "@/Api's/interface/Users";
import { fetchAllUsers } from "@/Api's";
import { Pagination } from "@mui/material";
// import { useLocation } from "react-router-dom";
// import { useParams } from "react-router-dom";

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

  useEffect(() => {
    fetchAllUsers(selectedRootCategory, selectedPrimaryCategories, pageSize, pageNumber, location, searchText)
      .then((response: any) => {
        setCustomers(response.data.payload);


        console.log(customers);

        setPageNumber(response.data.payload.pageNumber);
        setPageSize(response.data.payload.pageSize);
        setHasMore(response.data.payload.hasMore);
      })
      .catch((error: string) => {
        console.error("error while fetching customers: ", error);
      });
  }, [selectedRootCategory, selectedPrimaryCategories, pageNumber, pageSize, location, searchText]);

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

        {customers?.customers?.map((customer: Customer) => {
          return <ContractorCard data={customer.personalDetails} />;
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
