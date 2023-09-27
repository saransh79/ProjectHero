// import Categories from "@/components/search/PopularCategories";
import { useState } from "react";

// import Download from "@/components/Download";
import Footer from "@/components/Footer";
import Hero from "@/components/search/Hero";
import Navbar from "@/components/Navbar1";
// import Overlay from "@/components/Overlay";
import styles from "./search.module.css";
import FilterContainer from "@/components/search/FilterContainer";
import PopularCategoriesContainer from "@/components/search/PopularCategoriesContainer";
// import { Customer, Payload } from "@/Api's/interface/Users";
// import { fetchAllUsers } from "@/Api's";
// import ContractorCard from '@/components/ContractorCard'

const Search = () => {
  const [selectedRootCategory, setSelectedRootCategory] = useState<string>("");
  const [selectedPrimaryCategories, setSelectedPrimaryCategories] = useState<
    string[]
  >([]);
  const [location, setLocation] = useState<string>("");
  const [searchText, setSearchText] = useState<string>('');
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);

   const onLocationChange= (value: any)=>{
    setLocation(value);
   }
   const onSearchTextChange= (value: any)=>{
    setSearchText(value);
   }
   const handleSearchBox= ()=>{
    setShowSearchBox(prev=> !prev);
   }
  return (
    <div>
      <Navbar showSearchBox={showSearchBox}
      handleSearchBox= {handleSearchBox}/>
      <Hero 
      searchText= {searchText}
      onSearchTextChange= {onSearchTextChange}/>
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
            searchText= {searchText}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
