"use client"; // This is a client component

import type { NextPage } from "next";
import styles from "./filter-container.module.css";
import { useState } from "react";
import Viewmore from "./Viewmore";
import LocationContainer from "./LocationContainer";

const FilterContainer: NextPage = () => {
  const [topping, setTopping] = useState("Medium");

  const onOptionChange = () => {};
  return (
    <div>
      <div className={styles.frameParent}>
        <LocationContainer />

        <div className={styles.frameGroup}>
          <div className={styles.stroke}></div>
        </div>

        <div className={styles.categoryFilter}>
          <div className={styles.categoryHeader}>
            <div className={styles.categories}>Categories</div>
            <button>
              <img src="/assets/uparrow.svg" alt="uparrow" />
            </button>
          </div>

          <div className={styles.filters}>
            <div className={styles.option}>
              <input
                type="radio"
                id="gc"
                name="categories"
                //   value='General Contractor'
                //   checked= {true}
                onChange={onOptionChange}
              />
              <label htmlFor="gc">General Contractor</label>
            </div>
            <div className={styles.option}>
              <input
                type="radio"
                id="sc"
                name="categories"
                //   value='General Contractor'
                //   checked= {true}
                onChange={onOptionChange}
              />
              <label htmlFor="sc">Sub Contractor</label>
            </div>
            <div className={styles.option}>
              <input
                type="radio"
                id="lc"
                name="categories"
                //   value='General Contractor'
                //   checked= {true}
                onChange={onOptionChange}
              />
              <label htmlFor="lc">Labour Contractor</label>
            </div>
            <div className={styles.option}>
              <input
                type="radio"
                id="ls"
                name="categories"
                //   value='General Contractor'
                //   checked= {true}
                onChange={onOptionChange}
              />
              <label htmlFor="ls">Labour Supplier</label>
            </div>
          </div>
        </div>

        <div className={styles.frameGroup}>
          <div className={styles.stroke}></div>
        </div>

        {/* Worktype filter */}
        <div className={styles.categoryFilter}>
          <div className={styles.categoryHeader}>
            <div className={styles.workType}>Work Type</div>
            <button>
              <img src="/assets/uparrow.svg" alt="uparrow" />
            </button>
          </div>

          <div className={styles.filters}>
            <div className={styles.workOption}>
              <input
                type="checkbox"
                id="Painter"
                name="Painter"
                //   value='General Contractor'
                //   checked= {true}
                onChange={onOptionChange}
              />
              <label htmlFor="Painter">Painter</label>
            </div>
            <div className={styles.workOption}>
              <input
                type="checkbox"
                id="Masonry"
                name="Masonry"
                //   value='General Contractor'
                //   checked= {true}
                onChange={onOptionChange}
              />
              <label htmlFor="Masonry">Masonry</label>
            </div>
            <div className={styles.workOption}>
              <input
                type="checkbox"
                id="Carpentry"
                name="Carpentry"
                //   value='General Contractor'
                //   checked= {true}
                onChange={onOptionChange}
              />
              <label htmlFor="Carpentry">Carpentry</label>
            </div>
            <div className={styles.workOption}>
              <input
                type="checkbox"
                id="Gypsum"
                name="Gypsum"
                //   value='General Contractor'
                //   checked= {true}
                onChange={onOptionChange}
              />
              <label htmlFor="Gypsum">Gypsum</label>
            </div>
          </div>

          <Viewmore />
        </div>

        <div className={styles.frameGroup}>
          <div className={styles.stroke}></div>
        </div>

        {/* Specialization filter */}
        <div className={styles.categoryFilter}>
          <div className={styles.categoryHeader}>
            <div className={styles.workType}>Specialisation</div>
            <button>
              <img src="/assets/uparrow.svg" alt="uparrow" />
            </button>
          </div>

          <div className={styles.filters}>
            <div className={styles.specOption}>
              <input
                type="checkbox"
                id="specPainter"
                name="Painter"
                //   value='General Contractor'
                //   checked= {true}
                onChange={onOptionChange}
              />
              <label htmlFor="specPainter">Painter</label>
            </div>
            <div className={styles.specOption}>
              <input
                type="checkbox"
                id="specMasonry"
                name="Masonry"
                //   value='General Contractor'
                //   checked= {true}
                onChange={onOptionChange}
              />
              <label htmlFor="specMasonry">Masonry</label>
            </div>
            <div className={styles.specOption}>
              <input
                type="checkbox"
                id="specCarpentry"
                name="Carpentry"
                //   value='General Contractor'
                //   checked= {true}
                onChange={onOptionChange}
              />
              <label htmlFor="specCarpentry">Carpentry</label>
            </div>
            <div className={styles.specOption}>
              <input
                type="checkbox"
                id="specGypsum"
                name="Gypsum"
                //   value='General Contractor'
                //   checked= {true}
                onChange={onOptionChange}
              />
              <label htmlFor="specGypsum">Gypsum</label>
            </div>
          </div>

          <Viewmore />
        </div>
      </div>

      {/* for mobile screen */}
      <div className={styles.frameParentMobile}>
        <div className={styles.filtersParentMobile}>
          <div className={styles.filtersMobile}>
            <div className={styles.fieldText2}>Location</div>
            <img
              className={styles.arrowChevronRight2}
              alt=""
              src="assets/Chevron_Right.svg"
            />
          </div>
          <div className={styles.filtersMobile}>
            <div className={styles.fieldText2}>Categories</div>
            <img
              className={styles.arrowChevronRight2}
              alt=""
              src="assets/Chevron_Right.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
