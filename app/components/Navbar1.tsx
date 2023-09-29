"use client";
import React, { useState } from "react";
import styles from "./navbar1.module.css";
import SearchBox from "./SearchBox";
import { Close, KeyboardArrowUp } from "@mui/icons-material";
import Link from "next/link";

interface Iprops {
  showSearchBox?: boolean;
  handleSearchBox?: any;
}
const Navbar: React.FC<Iprops> = ({ showSearchBox, handleSearchBox }, {params}) => {
  // const location = useNavigate();
  // const currentURL = window.location.pathname;
  // const segments = currentURL.split("/");
  // const lastSegment = segments[segments.length - 1];
  const lastSegment = "search";
console.log(params);

  const [activeLink, setActiveLink] = useState<string | null>("home");
  const [showSidebar, setShowSidebar]= useState(false);
  const handleSidebar=()=>{
    setShowSidebar(prev=>!prev);
  }
  const handleLinkClick = (id: string) => {
    setActiveLink(id);
  };
  return (
    <nav className={styles.navbar}>
      <Link href='/' className={styles.logo} 
      >
        <img src="/assets/PH New Logo.svg" alt="logo" />
        <img
          src="/assets/Business.svg"
          alt="logo-content"
          className="business"
        />
      </Link>
      <div className={styles.navOptions}>
        <div
          className={styles.link}
          style={{
            display: lastSegment === "search" ? "none" : "inline-block",
          }}
          onClick={handleSearchBox}
        >
          <div className={styles.searchLink}>
            <img src="/assets/Search_Magnifying_Glass.svg"/>
            <div>Search</div>
          </div>
        </div>
        <div className={styles.link}>
          <Link href='/'
            className={activeLink === "home" ? styles.active : ""}
            onClick={() => {
              handleLinkClick("home");
            }}
          >
            Home
          </Link>
        </div>
        <div className={styles.link}>
          <Link href="/search"
            className={activeLink === "pro" ? styles.active : ""}
            onClick={() => {
              handleLinkClick("pro");
            }}
          >
            Find Professionals
          </Link>
        </div>
      </div>

      <div className={styles.navIcons}>
        <img
          className={styles.interfaceSearchMagnifying1}
          alt=""
          src="/assets/Search_Magnifying_Glass.svg"
          onClick={handleSearchBox}
          style={{
            display: lastSegment === "search" ? "none" : "inline-block",
          }}
        />
        <img
          className={styles.interfaceSearchMagnifying1}
          alt=""
          src="/assets/hamburger menu.svg"
          onClick={handleSidebar}
        />
      </div>

     {showSidebar && <div className={styles.sidebar}>
        <div className={styles.items}>
          <div className={styles.close} onClick={handleSidebar}>
          <Close/>
          </div>
          <div className={styles.link}>
            <Link href="/"
              className={activeLink === "home" ? styles.active : ""}
              onClick={() => {
                handleLinkClick("home");
              }}
            >
              Home
            </Link>
          </div>
          <div className={styles.link}>
            <Link href='/search'
              className={activeLink === "pro" ? styles.active : ""}
              onClick={() => {
                handleLinkClick("pro");
                // location("/search");
              }}
            >
              Find Professionals
            </Link>
          </div>
        </div>
      </div>}

      {/* Searchbox */}
      {showSearchBox && (
        <div className={styles.searchboxWrapper}>
          <div className={styles.searchbox_container}>
            <SearchBox />
            <div className={styles.toggler} onClick={handleSearchBox}>
              <KeyboardArrowUp />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
