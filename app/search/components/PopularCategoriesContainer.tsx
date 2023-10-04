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
  searchText,
}) => {
  const [customers, setCustomers] = useState<Payload | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [shouldRunEffect, setShouldRunEffect] = useState(false);

  useEffect(() => {
    setShouldRunEffect((prev) => !prev);
  }, [
    selectedRootCategory,
    selectedPrimaryCategories,
    pageNumber,
    pageSize,
    location,
    searchText,
  ]);

  useEffect(() => {
    // console.log(location);
    // console.log(searchText);
    // console.log(selectedRootCategory)
    // console.log(selectedPrimaryCategories);

    fetchAllUsers(
      selectedRootCategory,
      selectedPrimaryCategories,
      pageSize,
      pageNumber,
      location,
      searchText
    )
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
      {!selectedRootCategory && <div className={`${styles.frameGroup}`}>
        <PopularCategories
          selectedRootCategory={selectedRootCategory}
          setSelectedRootCategory={setSelectedRootCategory}
        />
      </div>}

      <div className={styles.frameCards}>
        <div className={styles.topBuildingContractorsWrapper}>
          {selectedRootCategory && <div className={styles.popularCategories}>
          Showing {customers?.customers.length} results
          </div>}
          {!selectedRootCategory && <div className={styles.popularCategories}>
          Top Building Contractors
          </div>}
        </div>

        <div className={styles.user_cards}>
          {!showAll && (
            <center >
             {customers?.customers.length ? <ContractorCard data={customers?.customers[0]} rootCategory={selectedRootCategory}/> : null }
              <div style={{
                marginTop: 30
              }}>
              <Download />
              </div>
            </center>
          )}
          {showAll &&
            customers?.customers?.map((customer, key) => {
              if (key == 0) {
                return (
                  customer.personalDetails.userId &&
                  <center key={key}>
                    <ContractorCard data={customer} rootCategory= {selectedRootCategory} key={key} />
                    <div style={{
                      marginTop: 30,
                    }}>
                      </div>
                    <Download />
                  </center>
                );
              } else {
                return <ContractorCard data={customer} key={key} />;
              }
            })}
        </div>

        {showAll && customers?.customers.length ? (
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
        ) : null}
        <div
        className={styles.viewmore}
         onClick={() => setShowAll(true)}>{!showAll && <Viewmore />}</div>
      </div>
    </div>
  );
};

export default PopularCategoriesContainer;
