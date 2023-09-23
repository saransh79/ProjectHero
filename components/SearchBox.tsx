"use client";

import React from "react";
import styles from "./searchBox.module.css";

interface Iprops {
  showSearchBox?: boolean;
  setShowSearchBox?: any;
}
const SearchBox: React.FC<Iprops> = ({ showSearchBox, setShowSearchBox }) => {
  const closeSearchBox = () => {
    setShowSearchBox(false);
  };
  return (
    <div className={`${showSearchBox && styles.navSearch} ${styles.searchbox}`}>
      <div className={styles.searchbar}>
        <img src="/assets/Search_Magnifying_Glass.svg" alt="search" />
        <input type="text" placeholder="Search by Name or Phone Number" />
      </div>
      <div onClick={closeSearchBox}>
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchBox;
