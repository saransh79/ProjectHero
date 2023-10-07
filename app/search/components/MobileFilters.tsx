import { ArrowDownIcon } from "@heroicons/react/20/solid";
import styles from "./mobileFilters.module.css";
import {
  CheckBox,
  CheckBoxOutlineBlank,
  Close,
  KeyboardArrowDown,
  Search,
} from "@mui/icons-material";
import { states } from "../data/states";
import { useState } from "react";
import { Autocomplete, Checkbox, TextField } from "@mui/material";
import { PrimaryCategory, RootCategory } from "@/Api's/interface/Filters";

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

interface Iprops {
  location?: string[];
  onLocationChange?: any;
  selectedRootCategory?: string;
  selectedPrimaryCategories?: string[];
  setSelectedRootCategory?: any;
  setSelectedPrimaryCategories?: any;
  rootCategories?: RootCategory[];
  primaryCategories?: PrimaryCategory[];
}

const MobileFilters: React.FC<Iprops> = ({
  location,
  onLocationChange,
  rootCategories,
  primaryCategories,
  selectedPrimaryCategories,
  selectedRootCategory,
  setSelectedPrimaryCategories,
  setSelectedRootCategory,
}) => {
  const [showLocation, setShowLocation] = useState<boolean>(false);
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const [showWorkType, setShowWorktype] = useState<boolean>(false);
  const [selectedLocations, setSelectedLocations] = useState([]);

  // console.log(selectedLocations);

  const handleLocationChange = (event: any, newSelectedLocations: any) => {
    setSelectedLocations(newSelectedLocations);
  };
  const handleLocationSubmit = (e: any) => {
    e.preventDefault();
    onLocationChange(selectedLocations);
  };
  return (
    <div className={styles.filter_parent}>
      <div className={styles.filter_type_parent}>
        <div className={styles.filtersParent}>
          <div className={styles.filters} onClick={() => setShowLocation(true)}>
            {/* <div className={styles.wrapper}>
                <b className={styles.b}>3</b>
              </div> */}
            <div className={styles.fieldText2}>Location</div>
            <KeyboardArrowDown />
          </div>
          <div className={styles.filters}>
            <div className={styles.fieldText2}>Categories</div>
            <KeyboardArrowDown />
          </div>
          <div className={styles.filters}>
            <div className={styles.fieldText2}>WorkType</div>
            <KeyboardArrowDown />
          </div>
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
                  multiple
                  id="checkboxes-tags-demo"
                  size="small"
                  freeSolo
                  disableCloseOnSelect
                  value={selectedLocations}
                  onChange={handleLocationChange}
                  style={{
                    width: "300px",
                    // border: "1px solid"
                  }}
                  options={states}
                  getOptionLabel={(option) => option}
                  renderOption={(props, option, { selected }) => {
                    return (
                      <li {...props} key={option}>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8 }}
                          checked={selected}
                        />
                        {option}
                      </li>
                    );
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Search by States" />
                  )}
                />
              </div>
              <div className={styles.button_wrapper}>
                <button type="submit" className={styles.button}>
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* {showCategories && (
        <div className={styles.container}>
          <div className={styles.filter_container}>
            <div className={styles.heading_container}>
              <div className={styles.heading}>Location</div>
              <div onClick={() => setShowLocation(false)}>
                <Close />
              </div>
            </div>

            <div className={styles.hr}></div>
            <div className={styles.searchbox}>
              <Search className={styles.searchIcon} />
              <div className={styles.seperator}></div>
              <div className={styles.search_input}>
                <input type="text" placeholder="Search location" />
              </div>
            </div>

            <div className={styles.options_container}>
              {states.map((item, key) => {
                return (
                  <div className={styles.option}>
                    <input
                      type="checkbox"
                      id={item}
                      name={item}
                      value={item}
                      //   checked= {true}
                      // onChange={handlePrimaryCategoryChange}
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                );
              })}
            </div>

            <button type="submit" className={styles.button}>
              Confirm
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default MobileFilters;
