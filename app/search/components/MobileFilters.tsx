import { ArrowDownIcon } from "@heroicons/react/20/solid";
import styles from "./mobileFilters.module.css";
import { Close, KeyboardArrowDown, Search } from "@mui/icons-material";
import { states } from "../data/states";
import { useState } from "react";
import { Autocomplete, Box, Checkbox, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PrimaryCategory, RootCategory } from "@/Api's/interface/Filters";
import { useRouter, useSearchParams } from "next/navigation";

const CustomTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border: none; // Remove border on hover
    }
    &.Mui-focused fieldset {
      border: none; // Remove border when focused
    }
    fieldset {
      border: none; // Remove default border
    }
  }
`;

interface Iprops {
  location?: string;
  onLocationChange?: any;
  selectedRootCategory?: string;
  selectedPrimaryCategories?: string[];
  handlePrimaryCategoryChange?: any;
  handleRootCategoryChange?: any;
  setSelectedRootCategory?: any;
  setSelectedPrimaryCategories?: any;
  rootCategories: RootCategory[];
  primaryCategories: PrimaryCategory[];
}

const MobileFilters: React.FC<Iprops> = ({
  onLocationChange,
  location,
  selectedPrimaryCategories,
  selectedRootCategory,
  setSelectedRootCategory,
  setSelectedPrimaryCategories,
  handlePrimaryCategoryChange,
  handleRootCategoryChange,
  rootCategories,
  primaryCategories,
}) => {
  const [showLocation, setShowLocation] = useState<boolean>(false);
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const [showWorkType, setShowWorktype] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation]= useState("");
  const [category, setCategory] = useState(selectedRootCategory);
  const [worktype, setWorktype] = useState([]);

  // console.log(location);
  // console.log("selectedRoot",selectedRootCategory);
  
  console.log(worktype);
  console.log("selectedPrimary",selectedPrimaryCategories);

  const handleLocationSubmit = (e: any) => {
    e.preventDefault();
    setShowLocation(false);
    onLocationChange(selectedLocation)
  };
  const handleCategorySubmit = (e: any) => {
    e.preventDefault();
    setShowCategories(false);
  };
  const handleWorktypeSubmit = (e: any) => {
    e.preventDefault();
    setShowWorktype(false);
  };

  return (
    <div className={styles.filter_parent}>
      <div className={styles.filter_type_parent}>
        <div className={styles.filtersParent}>
          <div
            className={`${styles.filters} ${
              location && styles.active_category
            }`}
            onClick={() => setShowLocation(true)}
          >
            <div className={styles.fieldText2}>
              {location || "Location"}
            </div>
            <KeyboardArrowDown />
          </div>

          <div
            className={`${styles.filters} ${
              category && styles.active_category
            }`}
            onClick={() => setShowCategories(true)}
          >
            <div className={styles.fieldText2}>{category || "Categories"}</div>
            <KeyboardArrowDown />
          </div>

          {category && (
            <div
              className={`${styles.filters} ${
                styles.active_category
              }`}
              onClick={() => setShowWorktype(true)}
            >
             
                {/* <div className={styles.wrapper}>
                  <b className={styles.b}>{worktype.length}</b>
                </div> */}
              
              <div className={styles.fieldText2}>WorkType</div>
              <KeyboardArrowDown />
            </div>
          )}
        </div>
      </div>

      {showLocation && (
        <div className={styles.container}>
          <div className={styles.filter_container}>
            <div className={styles.heading_container}>
              <div className={styles.heading}>Location</div>
              <div onClick={() => setShowLocation(false)}>
                <Close />
              </div>
            </div>

            <div className={styles.hr}></div>
            <form
              onSubmit={handleLocationSubmit}
              className={styles.searchWrapper}
            >
              <div className={styles.search_box}>
                <Search className={styles.searchIcon} />

                <Autocomplete
                  id="checkboxes-tags-demo"
                  size="small"
                  freeSolo
                  // disableCloseOnSelect
                  options={states}
                  // autoHighlight
                  getOptionLabel={(option) => option}
                  style={{
                    width: "300px",
                  }}
                  renderOption={(props, option, state) => (
                    <li {...props} className={styles.option}>
                      <input
                        type="radio"
                        checked={state.selected}
                        onChange={() => {}}
                      />
                      {option}
                    </li>
                  )}
                  value={selectedLocation}
                  onChange={(_, newValue: any) => {
                    setSelectedLocation(newValue);
                  }}
                  renderInput={(params) => (
                    <CustomTextField
                      {...params}
                      placeholder="Search by States"
                      variant="outlined"
                    />
                  )}
                />
              </div>
              <div className={styles.button_wrapper}>
                <button
                  type="submit"
                  className={`${styles.button} ${
                    location && styles.active_button
                  }`}
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showCategories && (
        <div className={styles.container}>
          <div className={styles.filter_container}>
            <div className={styles.heading_container}>
              <div className={styles.heading}>You are looking for</div>
              <div onClick={() => setShowCategories(false)}>
                <Close />
              </div>
            </div>

            <div className={styles.hr}></div>
            <form
              onSubmit={handleCategorySubmit}
              className={styles.searchWrapper}
            >
              <div className={styles.searchbox}>
                <Search className={styles.searchIcon} />

                <Autocomplete
                  id="checkboxes-tags-demo"
                  size="small"
                  freeSolo
                  // disableCloseOnSelect
                  options={rootCategories}
                  // autoHighlight
                  // getOptionLabel={(option) => option}
                  style={{
                    width: "300px",
                  }}
                  renderOption={(props, option, state) => (
                    <li
                      {...props}
                      className={`${styles.option} ${
                        category == option.label && styles.active_li
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={state.selected}
                        onChange={() => {}}
                      />
                      <div className={styles.icon_wrapper}>
                        <img src={option?.icon} alt="" />
                      </div>
                      {option?.label}
                    </li>
                  )}
                  value={category}
                  onChange={(_, newValue: any) => {
                    setCategory(newValue.label)
                    handleRootCategoryChange(newValue.slug);
                  }}
                  renderInput={(params) => (
                    <CustomTextField
                      {...params}
                      placeholder="Search for specializations"
                      variant="outlined"
                    />
                  )}
                />
              </div>

              <div className={styles.button_wrapper}>
                <button
                  type="submit"
                  className={`${styles.button} ${
                    category && styles.active_button
                  }`}
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showWorkType && category && (
        <div className={styles.container}>
          <div className={styles.filter_container}>
            <div className={styles.heading_container}>
              <div className={styles.heading}>Work Type</div>
              <div onClick={() => setShowWorktype(false)}>
                <Close />
              </div>
            </div>

            <div className={styles.hr}></div>
            <form
              onSubmit={handleWorktypeSubmit}
              className={styles.searchWrapper}
            >
              <div className={styles.searchbox}>
                <Search className={styles.searchIcon} />

                <Autocomplete
                  multiple
                  id="checkboxes-tags-demo"
                  size="small"
                  freeSolo
                  // disableCloseOnSelect
                  options={primaryCategories}
                  autoHighlight
                  // getOptionLabel={(option) => option.label}
                  style={{
                    width: "300px",
                  }}
                  renderOption={(props, option, {selected}) => (
                    <li
                      {...props}
                      className={`${styles.option} ${styles.active_li
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selected}
                        value={option.slug}
                        onChange={handlePrimaryCategoryChange}
                      />
                      <div className={styles.icon_wrapper}>
                        <img src={option?.icon} alt="" />
                      </div>
                      {option?.label}
                    </li>
                  )}
                  value={worktype}
                  onChange={(_, newValue: any) => {
                    setWorktype(newValue.label);
                  }}
                  renderInput={(params) => (
                    <CustomTextField
                      {...params}
                      placeholder="Search for worktype"
                      variant="outlined"
                    />
                  )}
                />
              </div>

              <div className={styles.button_wrapper}>
                <button
                  type="submit"
                  className={`${styles.button} ${styles.active_button
                  }`}
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileFilters;
