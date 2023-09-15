import Categories from "@/components/search/PopularCategories";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import Hero from "@/components/search/Hero";
import Navbar from "@/components/Navbar1";
import Overlay from "@/components/Overlay";
import styles from "./search.module.css";
import FilterContainer from "@/components/search/FilterContainer";
import PopularCategoriesContainer from "@/components/search/PopularCategoriesContainer";
// import ContractorCard from '@/components/ContractorCard'

const Search = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Overlay/> */}
      {/* <Download/> */}
      <div className={styles.card_location_container}>
        <div>
          <FilterContainer />
        </div>
        <div className={styles.card_container}>
          <PopularCategoriesContainer />
        </div>
      </div>
      {/* <Categories/> */}
      {/* <ContractorCard/> */}
      <Footer />
    </div>
  );
};

export default Search;
