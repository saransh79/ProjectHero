// import { NextPage } from "next";
import { useState } from "react";
import styles from "./location-container.module.css";
import {KeyboardArrowDown, KeyboardArrowUp} from '@mui/icons-material';

interface Iprops{
  location?: string,
 onLocationChange?: any;
}
const LocationContainer: React.FC<Iprops> = ({ location, onLocationChange}) => {
  
  const [show, setShow]= useState(false);
  const handleChange= ()=>{
    setShow(prev=>!prev);
  }
  return (
      <div className={styles.frameGroup}>
        <div className={styles.locationParent}>
          <div className={styles.locationHeader}>
            <div className={styles.location}
            onClick={handleChange}>Location</div>
            {!show && <div onClick={handleChange}><KeyboardArrowDown/></div>}
            {show && <div onClick={handleChange}><KeyboardArrowUp/></div>}
          </div>
          {show && <div className={styles.searchContainer}>
            <div className={styles.searchbox}>
              <input type="text" placeholder="Eg xyz"
              name="location"
              value={location}
              onChange={(e)=>onLocationChange(e.target.value)} />
              <button className={styles.go}
              >
                <img src="/assets/rightarrow.svg" alt="rightarrow" />
              </button>
            </div>
            <div className={styles.location}>
              <img src="/assets/Map_Pin_yellow.svg" alt="locationIcon" />

              <p>Use my current GPS</p>
            </div>
          </div>}
        </div>
      </div>
  );
};

export default LocationContainer;
