import { useState } from "react";
import styles from "./location-container.module.css";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { fetchLocation } from "@/Api's";

interface Iprops {
  location?: string;
  onLocationChange?: any;
}
const LocationContainer: React.FC<Iprops> = ({
  location,
  onLocationChange,
}) => {
  const [loc, setLoc] = useState<string>("");
  const [show, setShow] = useState(true);
  const handleChange = () => {
    setShow((prev) => !prev);
  };

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetchLocation(latitude, longitude);

            const stateName = response.data.address.state;
            setLoc(stateName);
          } catch (error) {
            alert("Error fetching location data.");
          }
        },
        (error) => {
          alert(`Error: ${error.message}`);
        }
      );
    } else {
      alert("Geolocation is not available in your browser.");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onLocationChange(loc);
  };
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
                <input
                  type="text"
                  placeholder="Search by State's Name"
                  name="location"
                  value={loc}
                  onChange={(e) => setLoc(e.target.value)}
                />
                <button
                  type="submit"
                  className={styles.go}
                  style={{
                    background: loc && "#EFC41A",
                  }}
                >
                  <img src="/assets/rightarrow.svg" alt="rightarrow" />
                </button>
              </div>
            </form>

            <div className={styles.location}>
              <img src="/assets/Map_Pin_yellow.svg" alt="locationIcon" />
              <p
                style={{
                  cursor: "pointer",
                }}
                onClick={getLocation}
              >
                Use my current GPS
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationContainer;
