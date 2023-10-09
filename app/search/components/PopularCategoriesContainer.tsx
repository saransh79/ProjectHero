import { useState, useEffect, useRef } from "react";
import styles from "./popular-categories-container.module.css";
import Download from "../../components/Download";
import ContractorCard from "./ContractorCard";
import PopularCategories from "./PopularCategories";
import Viewmore from "../../components/Viewmore";
import { Payload } from "@/Api's/interface/Users";
import { fetchAllUsers } from "@/Api's";
import { Pagination } from "@mui/material";
import { useSearchParams } from "next/navigation";

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
}) => {
  const [customers, setCustomers] = useState<Payload | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [hasMore, setHasMore] = useState<boolean>(false);

  const searchParams = useSearchParams();

  const search = searchParams.get("query");

  useEffect(() => {
    fetchAllUsers(
      selectedRootCategory,
      selectedPrimaryCategories,
      pageSize,
      pageNumber,
      location,
      search
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
  }, [
    selectedRootCategory,
    selectedPrimaryCategories,
    pageNumber,
    pageSize,
    location,
    search,
  ]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPageNumber(newPage);
  };

  return (
    <div className={styles.frameParent}>
      {!selectedRootCategory && (
        <div className={`${styles.frameGroup}`}>
          <PopularCategories
            setSelectedRootCategory={setSelectedRootCategory}
          />
        </div>
      )}

      <div className={styles.frameCards}>
        <div className={styles.topBuildingContractorsWrapper}>
          {selectedRootCategory && (
            <div className={styles.popularCategories}>
              Showing {customers?.customers.length} results
            </div>
          )}
          {!selectedRootCategory && (
            <div className={styles.popularCategories}>
              Top Building Contractors
            </div>
          )}
        </div>

        <div className={styles.user_cards}>
          {showAll === false ? (
            !selectedRootCategory ? (
              <center>
                {customers?.customers.length ? (
                  <ContractorCard data={customers?.customers[0]} />
                ) : null}
                <div
                  style={{
                    marginTop: 30,
                  }}
                >
                  <Download />
                </div>
              </center>
            ) : (
              customers?.customers?.slice(0, 3).map((customer, key) => {
                if (key == 0) {
                  return (
                    <center key={key}>
                      <ContractorCard data={customer} key={key} />
                      <div
                        style={{
                          marginTop: 30,
                        }}
                      ></div>
                      <Download />
                    </center>
                  );
                } else {
                  return <ContractorCard data={customer} key={key} />;
                }
              })
            )
          ) : (
            customers?.customers?.map((customer, key) => {
              if (key == 0) {
                return (
                  <center key={key}>
                    <ContractorCard data={customer} key={key} />
                    <div
                      style={{
                        marginTop: 30,
                      }}
                    ></div>
                    <Download />
                  </center>
                );
              } else {
                return <ContractorCard data={customer} key={key} />;
              }
            })
          )}
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
              size="small"
              count={10}
              page={pageNumber}
              onChange={handlePageChange}
              disabled={!hasMore}
              color="primary"
              variant="outlined"
              shape="rounded"
            />
          </div>
        ) : null}

        <div className={styles.viewmore} onClick={() => setShowAll(true)}>
          {!showAll && customers?.customers.length ? <Viewmore /> : null}
        </div>
      </div>
    </div>
  );
};

export default PopularCategoriesContainer;
