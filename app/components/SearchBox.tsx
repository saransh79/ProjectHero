"use client";

import React from "react";
import styles from "./searchBox.module.css";

interface Iprops {
  searchText?: string;
  onSearchTextChange?: any;
}
const SearchBox: React.FC<Iprops> = ({searchText, onSearchTextChange}) => {

  // console.log(searchText);
  
  return (
    <div className={styles.searchbox}>
      <div className={styles.searchbar}>
        <img src="/assets/Search_Magnifying_Glass.svg" alt="search" />
        <input type="text"
        value={searchText} 
        onChange={(e)=>onSearchTextChange(e.target.value)}
        placeholder="Search by Name or Phone Number" />
      </div>
      <div>
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchBox;
