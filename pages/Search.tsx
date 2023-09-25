import Categories from "@/components/search/PopularCategories";
import { useState, useEffect } from "react";

import Download from "@/components/Download";
import Footer from "@/components/Footer";
import Hero from "@/components/search/Hero";
import Navbar from "@/components/Navbar1";
import Overlay from "@/components/Overlay";
import styles from "./search.module.css";
import FilterContainer from "@/components/search/FilterContainer";
import PopularCategoriesContainer from "@/components/search/PopularCategoriesContainer";
import { Customer, Payload } from "@/Api's/interface/Users";
import { fetchAllUsers } from "@/Api's";
// import ContractorCard from '@/components/ContractorCard'

const Search = () => {
  const [selectedRootCategory, setSelectedRootCategory] = useState<string>("");
  const [selectedPrimaryCategories, setSelectedPrimaryCategories] = useState<
    string[]
  >([]);
  const [customers, setCustomers] = useState<Customer[]>();

  useEffect(() => {
    fetchAllUsers(selectedRootCategory, selectedPrimaryCategories)
      .then((response: any) => {
        setCustomers(response.data.payload.customers);
      })
      .catch((error: string) => {
        console.error("error while fetching customers: ", error);
      });
  }, [selectedRootCategory, selectedPrimaryCategories]);
  
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Overlay/> */}
      {/* <Download/> */}
      <div className={styles.card_location_container}>
        <div>
          <FilterContainer
            selectedRootCategory={selectedRootCategory}
            setSelectedRootCategory={setSelectedRootCategory}
            selectedPrimaryCategories={selectedPrimaryCategories}
            setSelectedPrimaryCategories={setSelectedPrimaryCategories}
          />
        </div>
        <div className={styles.card_container}>
          <PopularCategoriesContainer customers={customers}
          selectedRootCategory={selectedRootCategory}
          setSelectedRootCategory={setSelectedRootCategory}/>
        </div>
      </div>
      {/* <Categories/> */}
      {/* <ContractorCard/> */}
      <Footer />
    </div>
  );
};

export default Search;
