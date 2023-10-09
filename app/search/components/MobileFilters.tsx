import styles from "./mobileFilters.module.css";
import { Close, KeyboardArrowDown, Search } from "@mui/icons-material";
import { states } from "../data/states";
import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PrimaryCategory, RootCategory } from "@/Api's/interface/Filters";

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
  rootCategories,
  primaryCategories,
}) => {
  const [showLocation, setShowLocation] = useState<boolean>(false);
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const [showWorkType, setShowWorktype] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [category, setCategory] = useState("");
  const [worktype, setWorktype] = useState<PrimaryCategory[]>([]);

  const handleLocationSubmit = (e: any) => {
    e.preventDefault();
    onLocationChange(selectedLocation);
    setShowLocation(false);
  };
  const handleCategorySubmit = (e: any) => {
    e.preventDefault();
    if(!category && worktype.length>0){
      setSelectedPrimaryCategories([]);
      setWorktype([]);
    }
    setShowCategories(false);
  };
  const handleWorktypeSubmit = (e: any) => {
    e.preventDefault();

    const values= worktype.map((option)=>option.slug);
    setSelectedPrimaryCategories(values)
    
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
            onClick={() => {setShowLocation(true)
            document.body.style.overflow= "hidden"}}
          >
            <div className={styles.fieldText2}>{location || "Location"}</div>
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

          {selectedRootCategory && (
            <div
              className={`${styles.filters} ${
                selectedPrimaryCategories?
                selectedPrimaryCategories?.length > 0 && styles.active_category : ""
              }`}
              onClick={() => setShowWorktype(true)}
            >
              {selectedPrimaryCategories ? selectedPrimaryCategories?.length > 0 && (
                <div className={styles.wrapper}>
                  <b className={styles.b}>{selectedPrimaryCategories?.length}</b>
                </div>
              ) : null}

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
              <div onClick={() => {setShowLocation(false)
              document.body.style.overflow= "auto";
              }}>
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
                  className={styles.custom_autocomplete}
                  size="small"
                  freeSolo
                  // disableCloseOnSelect
                  options={states}
                  // autoHighlight
                  getOptionLabel={(option) => option}
                  style={{
                    width: "300px",
                  }}
                  renderOption={(props, option, state) => {
                    return (
                      <li key={option} {...props} className={styles.option}>
                        <input
                          type="radio"
                          checked={state.selected}
                          onChange={() => {}}
                        />
                        {option}
                      </li>
                    );
                  }}
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
                    selectedLocation && styles.active_button
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
                  disableCloseOnSelect
                  options={rootCategories}
                  autoHighlight
                  // getOptionLabel={(option) => option}
                  style={{
                    width: "300px",
                  }}
                  renderOption={(props, option, state) => (
                    <li
                      key={option.slug}
                      {...props}
                      className={`${styles.option} ${
                        category == option.label && styles.active_li
                      }`}
                    >
                      <input
                        key={option.slug}
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
                  value={category || ""}
                  onChange={(_, newValue: any) => {
                    setCategory(newValue?.label);
                    setSelectedRootCategory(newValue?.slug)
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

      {showWorkType && (
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
                  disableCloseOnSelect
                  options={primaryCategories}
                  autoHighlight
                  // getOptionLabel={(option) => option.slug}
                  style={{
                    width: "300px",
                  }}
                  renderOption={(props, option, { selected }) => (
                    <li
                      key={option.slug}
                      {...props}
                      className={`${styles.option} ${
                        selected && styles.active_li
                      }`}
                    >
                      <input
                        key={option.slug}
                        type="checkbox"
                        checked={selected}
                        onChange={() => {}}
                      />
                      <div className={styles.icon_wrapper}>
                        <img src={option?.icon} alt="" />
                      </div>
                      {option?.label}
                    </li>
                  )}
                  value={worktype || []}
                  onChange={(_, newValue: any) => {
                    setWorktype(newValue);
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
                  className={`${styles.button} ${styles.active_button}`}
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
