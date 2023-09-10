import Categories from "@/components/PopularCategories";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Overlay from "@/components/Overlay";
import styles from "./search.module.css";
import FilterContainer from "@/components/FilterContainer";
import PopularCategoriesContainer from "@/components/PopularCategoriesContainer";
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
