"use client"; // This is a client component
import { useEffect, useState } from "react";
import LocationContainer from "./LocationContainer";
import {
  PrimaryCategory,
  RootCategory,
  SecondaryCategory,
} from "@/Api's/interface/Filters";
import { fetchCategories } from "@/Api's";
import styles from "./filter-container.module.css";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

interface Iprops {
  selectedRootCategory?: string;
  setSelectedRootCategory: any;
  selectedPrimaryCategories: string[];
  setSelectedPrimaryCategories: any;
  location?: string;
  onLocationChange?: any;
}
const FilterContainer: React.FC<Iprops> = ({
  selectedRootCategory,
  setSelectedRootCategory,
  selectedPrimaryCategories,
  setSelectedPrimaryCategories,
  location,
  onLocationChange,
}) => {
  const [show, setShow] = useState(false);
  const [showWorktype, setShowWorktype] = useState(false);
  const [showSpecialization, setShowSpecialization] = useState(false);

  const handleChange = () => {
    setShow((prev) => !prev);
  };
  const handleWorktypeChange = () => {
    setShowWorktype((prev) => !prev);
  };
  const handleSpecialChange = () => {
    setShowSpecialization((prev) => !prev);
  };
  const [rootCategories, setRootCategories] = useState<RootCategory[]>([]);
  const [primaryCategories, setPrimaryCategories] = useState<PrimaryCategory[]>(
    []
  );
  const [secondaryCategories, setSecondaryCategories] = useState<
    SecondaryCategory[]
  >([]);
  const [selectedSecondaryCategories, setSelectedSecondaryCategories] =
    useState<string[]>([]);

  useEffect(() => {
    // Fetch root categories
    fetchCategories()
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
      fetchCategories(selectedRootCategory)
        .then((response) => {
          setPrimaryCategories(response.data.payload.primaryCategories);
          // console.log(primaryCategories);
        })
        .catch((error) => {
          console.error("Error fetching primary categories:", error);
        });
    }
  }, [selectedRootCategory]);

  useEffect(() => {
    // Fetch secondary categories when primary categories are selected
    if (selectedRootCategory && selectedPrimaryCategories.length > 0) {
      fetchCategories(selectedRootCategory, selectedPrimaryCategories)
        .then((response) => {
          setSecondaryCategories(response.data.payload.secondaryCategories);
          // console.log(secondaryCategories);
        })
        .catch((error) => {
          console.error("Error fetching secondary categories:", error);
        });
    }
  }, [selectedRootCategory, selectedPrimaryCategories]);

  const handleRootCategoryChange = (value: any) => {
    if (selectedRootCategory === value) setSelectedRootCategory(null);
    else {
      setSelectedRootCategory(value);
    }
  };

  const handlePrimaryCategoryChange = (event: any) => {
    const selectedValue = event.target.value;

    // Check if the selected value is already in the array
    if (selectedPrimaryCategories.includes(selectedValue)) {
      // If it is, remove it from the array
      const updatedValues = selectedPrimaryCategories.filter(
        (value) => value !== selectedValue
      );
      setSelectedPrimaryCategories(updatedValues);
    } else {
      // If it's not, add it to the array
      setSelectedPrimaryCategories([
        ...selectedPrimaryCategories,
        selectedValue,
      ]);
    }
  };

  const handleSecondaryCategoryChange = (event: any) => {
    const selectedValue = event.target.value;

    // Check if the selected value is already in the array
    if (selectedSecondaryCategories.includes(selectedValue)) {
      // If it is, remove it from the array
      const updatedValues = selectedSecondaryCategories.filter(
        (value) => value !== selectedValue
      );
      setSelectedSecondaryCategories(updatedValues);
    } else {
      // If it's not, add it to the array
      setSelectedSecondaryCategories([
        ...selectedSecondaryCategories,
        selectedValue,
      ]);
    }
  };

  return (
    <div>
      <div className={styles.frameParent}>
        <LocationContainer
          location={location}
          onLocationChange={onLocationChange}
        />

        <div className={styles.frameGroup}>
          <div className={styles.stroke}></div>
        </div>

        {/* Root Categories */}
        <div className={styles.categoryFilter}>
          <div className={styles.categoryHeader}>
            <div className={styles.categories} onClick={handleChange}>
              Categories
            </div>
            {show && (
              <div onClick={handleChange}>
                <KeyboardArrowUp />
              </div>
            )}
            {!show && (
              <div onClick={handleChange}>
                <KeyboardArrowDown />
              </div>
            )}
          </div>

          {show && (
            <div className={styles.filters}>
              {rootCategories?.map((category, key) => (
                <div className={styles.option} key={key}>
                  <input
                    type="radio"
                    id={category?.slug}
                    name="categories"
                    value={category?.slug}
                    checked={selectedRootCategory === category?.slug}
                    onChange={() => handleRootCategoryChange(category?.slug)}
                  />
                  <label htmlFor={category.slug}>{category.label}</label>
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedRootCategory && show && (
          <div className={styles.frameGroup}>
            <div className={styles.stroke}></div>
          </div>
        )}

        {/* Worktype filter */}
        <div className={styles.categoryFilter}>
          {selectedRootCategory && (
            <div className={styles.categoryHeader}>
              <div className={styles.workType} onClick={handleWorktypeChange}>
                Work Type
              </div>
              {!showWorktype && (
                <div onClick={handleWorktypeChange}>
                  <KeyboardArrowDown />
                </div>
              )}
              {showWorktype && (
                <div onClick={handleWorktypeChange}>
                  <KeyboardArrowUp />
                </div>
              )}
            </div>
          )}

          {showWorktype && (
            <div className={styles.filters}>
              {primaryCategories.map((category, key) => {
                return (
                  <div className={styles.workOption} key={key}>
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
          )}

          {/* {selectedRootCategory && <Viewmore />} */}
        </div>

        {selectedRootCategory && showWorktype && (
          <div className={styles.frameGroup}>
            <div className={styles.stroke}></div>
          </div>
        )}

        {/* Specialization filter */}

        <div className={styles.categoryFilter}>
          {selectedPrimaryCategories.length > 0 && (
            <div className={styles.categoryHeader}>
              <div className={styles.workType} onClick={handleSpecialChange}>
                Specialisation
              </div>
              {!showSpecialization && (
                <div onClick={handleSpecialChange}>
                  <KeyboardArrowDown />
                </div>
              )}
              {showSpecialization && (
                <div onClick={handleSpecialChange}>
                  <KeyboardArrowUp />
                </div>
              )}
            </div>
          )}

          {showSpecialization && selectedPrimaryCategories.length > 0 && (
            <div className={styles.filters}>
              {secondaryCategories?.map((category, key) => {
                return (
                  <div className={styles.specOption} key={key}>
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
                );
              })}
            </div>
          )}

          {/* {selectedPrimaryCategories && <Viewmore />} */}
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
