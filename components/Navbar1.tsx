"use client";

import React, { useState } from "react";
import styles from "./navbar1.module.css";
import SearchBox from "./SearchBox";

interface Iprops {
  showSearchBox?: boolean;
  setShowSearchBox?: any;
}
const Navbar: React.FC<Iprops> = ({ showSearchBox, setShowSearchBox }) => {
  const [activeLink, setActiveLink]= useState<string | null>("");
  
  const handleLinkClick=(id: string)=>{
    setActiveLink(id);
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/assets/PH New Logo.svg" alt="logo" />
        <img
          src="/assets/Business.svg"
          alt="logo-content"
          className="business"
        />
      </div>
      <div className={styles.navOptions}>
        <div className={styles.link}>
          <a 
          href="#"
          className={activeLink === '' ? styles.active: ""}
          onClick={()=>handleLinkClick('')}>Home</a>
        </div>
        <div className={styles.link}>
          <a 
          href="#"
          className={activeLink === 'pro' ? styles.active: ""}
          onClick={()=>handleLinkClick('pro')}>Find Professionals</a>
        </div>
        <div className={styles.link}>
          <a 
          href="#"
          className={activeLink === 'contact' ? styles.active: ""}
          onClick={()=>handleLinkClick('contact')}>Contact Us</a>
        </div>
      </div>

      <div className={styles.navIcons}>
        <img
          className={styles.interfaceSearchMagnifying1}
          alt=""
          src="assets/Search_Magnifying_Glass.svg"
        />
        <img
          className={styles.interfaceSearchMagnifying1}
          alt=""
          src="assets/hamburger menu.svg"
        />
      </div>

      {/* Searchbox */}
      {showSearchBox && <SearchBox showSearchBox={showSearchBox}
      setShowSearchBox={setShowSearchBox}/>}
    </nav>
  );
};

export default Navbar;
