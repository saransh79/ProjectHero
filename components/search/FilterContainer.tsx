"use client"; // This is a client component
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Viewmore from "../Viewmore";
import LocationContainer from "./LocationContainer";
import {
  Payload,
  PrimaryCategory,
  RootCategory,
  SecondaryCategory,
} from "@/Api's/interface/Filters";
import {
  fetchRootCategories,
  fetchPrimaryCategories,
  fetchSecondaryCategories,
} from "@/Api's";
import styles from "./filter-container.module.css";

interface Iprops{
  setCategory: any;
}
const FilterContainer: React.FC<Iprops> = ({setCategory}) => {
  // const [topping, setTopping] = useState<string>("Medium");
  // const [filters, setFilters] = useState<Payload | null>(null);
  // const [category, setCategory] = useState<string>("");

  const location = useLocation();
  const [rootCategories, setRootCategories] = useState<RootCategory[]>([]);
  const [selectedRootCategory, setSelectedRootCategory] = useState<string>("");
  const [primaryCategories, setPrimaryCategories] = useState<PrimaryCategory[]>(
    []
  );
  const [selectedPrimaryCategories, setSelectedPrimaryCategories] = useState<
    string[]
  >([]);
  const [secondaryCategories, setSecondaryCategories] = useState<SecondaryCategory[]>([]);
  const [selectedSecondaryCategories, setSelectedSecondaryCategories] = useState<string[]>([]);

  // const queryParams = new URLSearchParams(location.search);
  // const selectedRootCategory = queryParams.get("root");
  // const selectedPrimaryCategories = queryParams.getAll("workTypes");

  useEffect(() => {
    // Fetch root categories
    fetchRootCategories()
      .then((response) => {
        setRootCategories(response.data.payload.rootCategories);
        // console.log(rootCategories);
      })
      .catch((error) => {
        console.error("Error fetching root categories:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch primary categories when root category is selected
    if (selectedRootCategory) {
      fetchPrimaryCategories(selectedRootCategory)
        .then((response) => {
          setPrimaryCategories(response.data.payload.primaryCategories);
          console.log(primaryCategories);
        })
        .catch((error) => {
          console.error("Error fetching primary categories:", error);
        });
    }
  }, [selectedRootCategory]);

  useEffect(() => {
    // Fetch secondary categories when primary categories are selected
    if (selectedRootCategory && selectedPrimaryCategories.length > 0) {
      fetchSecondaryCategories(selectedRootCategory, selectedPrimaryCategories)
        .then((response) => {
          setSecondaryCategories(response.data.payload.secondaryCategories);
          console.log(secondaryCategories);
        })
        .catch((error) => {
          console.error("Error fetching secondary categories:", error);
        });
    }
  }, [selectedRootCategory, selectedPrimaryCategories]);

  const handleRootCategoryChange = (event: any) => {
    console.log(selectedRootCategory);
    setSelectedRootCategory(event.target.value);
    setCategory(event.target.value)
  };

  const handlePrimaryCategoryChange = (event: any) => {
    const selectedValue = event.target.value;

    // Check if the selected value is already in the array
    if (selectedPrimaryCategories.includes(selectedValue)) {
      // If it is, remove it from the array
      const updatedValues = selectedPrimaryCategories.filter(value => value !== selectedValue);
      setSelectedPrimaryCategories(updatedValues);
    } else {
      // If it's not, add it to the array
      setSelectedPrimaryCategories([...selectedPrimaryCategories, selectedValue]);
    }
  };

  const handleSecondaryCategoryChange = (event: any) => {
    const selectedValue = event.target.value;

    // Check if the selected value is already in the array
    if (selectedSecondaryCategories.includes(selectedValue)) {
      // If it is, remove it from the array
      const updatedValues = selectedSecondaryCategories.filter(value => value !== selectedValue);
      setSelectedSecondaryCategories(updatedValues);
    } else {
      // If it's not, add it to the array
      setSelectedSecondaryCategories([...selectedSecondaryCategories, selectedValue]);
    }
  };

  return (
    <div>
      <div className={styles.frameParent}>
        <LocationContainer />

        <div className={styles.frameGroup}>
          <div className={styles.stroke}></div>
        </div>

        {/* Root Categories */}
        <div className={styles.categoryFilter}>
          <div className={styles.categoryHeader}>
            <div className={styles.categories}>Categories</div>
            <button>
              <img src="/assets/uparrow.svg" alt="uparrow" />
            </button>
          </div>

          <div className={styles.filters}>
            {rootCategories?.map((category) => (
              <div className={styles.option}>
                <input
                  type="radio"
                  id={category.slug}
                  name="categories"
                  value={category.slug}
                  //   value='General Contractor'
                  //   checked= {true}
                  onChange={handleRootCategoryChange}
                />
                <label htmlFor={category.slug}>{category.label}</label>
              </div>
            ))}
          </div>
        </div>

        {selectedRootCategory && <div className={styles.frameGroup}>
          <div className={styles.stroke}></div>
        </div>}

        {/* Worktype filter */}
        <div className={styles.categoryFilter}>
          {selectedRootCategory && <div className={styles.categoryHeader}>
            <div className={styles.workType}>Work Type</div>
            <button>
              <img src="/assets/uparrow.svg" alt="uparrow" />
            </button>
          </div>}

          <div className={styles.filters}>
            {primaryCategories.map((category) => {
              return (
                <div className={styles.workOption}>
                  <input
                    type="checkbox"
                    id={category.slug}
                    name={category.slug}
                    value={category.slug}
                    //   checked= {true}
                    onChange={handlePrimaryCategoryChange}
                  />
                  <label htmlFor={category.slug}>{category.label}</label>
                </div>
              );
            })}
          </div>

          {selectedRootCategory && <Viewmore />}
        </div>

        {selectedRootCategory && <div className={styles.frameGroup}>
          <div className={styles.stroke}></div>
        </div>}

        {/* Specialization filter */}

        <div className={styles.categoryFilter}>
          {selectedPrimaryCategories.length > 0 && <div className={styles.categoryHeader}>
            <div className={styles.workType}>Specialisation</div>
            <button>
              <img src="/assets/uparrow.svg" alt="uparrow" />
            </button>
          </div>}

            
          <div className={styles.filters}>
            {secondaryCategories?.map((category)=>{
              return (
                <div className={styles.specOption}>
              <input
                type="checkbox"
                id={category.slug}
                name={category.slug}
                value={category.slug}
                //   checked= {true}
                onChange={handleSecondaryCategoryChange}
              />
              <label htmlFor={category.slug}>{category.label}</label>
            </div>
              )
            })}
          </div>

          {selectedPrimaryCategories && <Viewmore />}
        </div>
      </div>

      {/* for mobile screen */}
      <div className={styles.frameParentMobile}>
        <div className={styles.filtersParentMobile}>
          <div className={styles.filtersMobile}>
            <div className={styles.fieldText2}>Location</div>
            <img
              className={styles.arrowChevronRight2}
              alt=""
              src="assets/Chevron_Right.svg"
            />
          </div>
          <div className={styles.filtersMobile}>
            <div className={styles.fieldText2}>Categories</div>
            <img
              className={styles.arrowChevronRight2}
              alt=""
              src="assets/Chevron_Right.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
