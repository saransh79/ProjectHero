"use client"
import { useState } from "react";
import Footer from "@/app/components/Footer";
import Hero from "@/app/search/components/Hero";
import Navbar from "@/app/components/Navbar1";
import styles from "./style.module.css";
import FilterContainer from "@/app/search/components/FilterContainer";
import PopularCategoriesContainer from "@/app/search/components/PopularCategoriesContainer";

const Search = () => {
  const [selectedRootCategory, setSelectedRootCategory] = useState<string>("");
  const [selectedPrimaryCategories, setSelectedPrimaryCategories] = useState<
    string[]
  >([]);
  const [location, setLocation] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);

  const onLocationChange = (value: any) => {
    setLocation(value);
  };
  const onSearchTextChange = (value: any) => {
    setSearchText(value);
  };
  const handleSearchBox = () => {
    setShowSearchBox((prev) => !prev);
  };
  
  return (
    <div>
      <div className={styles.navbar_wrapper}>
        <Navbar
          showSearchBox={showSearchBox}
          handleSearchBox={handleSearchBox}
        />
      </div>
      <Hero searchText={searchText} onSearchTextChange={onSearchTextChange} />
      <div className={styles.card_location_container}>
        <div>
          <FilterContainer
            selectedRootCategory={selectedRootCategory}
            setSelectedRootCategory={setSelectedRootCategory}
            selectedPrimaryCategories={selectedPrimaryCategories}
            setSelectedPrimaryCategories={setSelectedPrimaryCategories}
            location={location}
            onLocationChange={onLocationChange}
          />
        </div>
        <div className={styles.card_container}>
          <PopularCategoriesContainer
            selectedRootCategory={selectedRootCategory}
            setSelectedRootCategory={setSelectedRootCategory}
            selectedPrimaryCategories={selectedPrimaryCategories}
            setSelectedPrimaryCategories={setSelectedPrimaryCategories}
            location={location}
            searchText={searchText}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
