import { useState } from "react";
import styles from "./location-container.module.css";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { fetchLocation } from "@/Api's";
import { Autocomplete, Popper, TextField } from "@mui/material";
import { states } from "../data/states";

interface Iprops {
  onLocationChange?: any;
}
const LocationContainer: React.FC<Iprops> = ({
  onLocationChange,
}) => {
  const [loc, setLoc] = useState<string | null>("");
  const [show, setShow] = useState(true);
  const handleChange = () => {
    setShow((prev) => !prev);
  };
  const handleLocChange = (e: any, newValue: string | null) => {
    setLoc(newValue);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onLocationChange(loc);
  };
  if (loc == null) onLocationChange("");
  
  return (
    <div className={styles.frameGroup}>
      <div className={styles.locationParent}>
        <div className={styles.locationHeader}>
          <div className={styles.location} onClick={handleChange}>
            Location
          </div>
          {!show && (
            <div onClick={handleChange}>
              <KeyboardArrowDown />
            </div>
          )}
          {show && (
            <div onClick={handleChange}>
              <KeyboardArrowUp />
            </div>
          )}
        </div>
        {show && (
          <div className={styles.searchContainer}>
            <form onSubmit={handleSubmit}>
              <div className={styles.searchbox}>
                <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  sx={{
                    width: "300px",
                  }}
                  options={states.map((option) => option)}
                  value={loc}
                  onChange={handleLocChange}
                  renderInput={(params) => (
                    <TextField {...params} label="Search by State" />
                  )}
                />

                <button
                  type="submit"
                  className={styles.go}
                  style={{
                    background: loc ? "#EFC41A" : "",
                  }}
                >
                  <img src="/assets/rightarrow.svg" alt="rightarrow" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationContainer;
