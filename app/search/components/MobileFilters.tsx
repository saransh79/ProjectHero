import styles from "./mobileFilters.module.css";
interface Iprops {
  location?: string;
  onLocationChange?: any;
  selectedRootCategory?: string;
  selectedPrimaryCategories?: string[];
  setSelectedRootCategory?: any;
  setSelectedPrimaryCategories?: any;
}
const MobileFilters: React.FC<Iprops> = ({
  location,
  onLocationChange,
  selectedPrimaryCategories,
  selectedRootCategory,
  setSelectedPrimaryCategories,
  setSelectedRootCategory,
}) => {


  return (
  <div className={styles.filter_parent}>

  </div>
  )};

export default MobileFilters;
