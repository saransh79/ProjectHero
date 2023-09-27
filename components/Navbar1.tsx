"use client";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styles from "./navbar1.module.css";
import SearchBox from "./SearchBox";
import { Close, KeyboardArrowUp } from "@mui/icons-material";

interface Iprops {
  showSearchBox?: boolean;
  handleSearchBox?: any;
}
const Navbar: React.FC<Iprops> = ({ showSearchBox, handleSearchBox }) => {
  const location = useNavigate();
  const currentURL = window.location.pathname;
  const segments = currentURL.split("/");
  const lastSegment = segments[segments.length - 1];

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
      <div className={styles.logo} onClick={() => location("/")}>
        <img src="/assets/PH New Logo.svg" alt="logo" />
        <img
          src="/assets/Business.svg"
          alt="logo-content"
          className="business"
        />
      </div>
      <div className={styles.navOptions}>
        <div
          className={styles.link}
          style={{
            display: lastSegment === "search" ? "none" : "inline-block",
          }}
          onClick={handleSearchBox}
        >
          <div className={styles.searchLink}>
            <img
              src="assets/Search_Magnifying_Glass.svg"
              alt=""
              height={20}
              width={20}
            />
            <div>Search</div>
          </div>
        </div>
        <div className={styles.link}>
          <div
            className={activeLink === "home" ? styles.active : ""}
            onClick={() => {
              handleLinkClick("home");
              location("/");
            }}
          >
            Home
          </div>
        </div>
        <div className={styles.link}>
          <div
            className={activeLink === "pro" ? styles.active : ""}
            onClick={() => {
              handleLinkClick("pro");
              location("/search");
            }}
          >
            Find Professionals
          </div>
        </div>
      </div>

      <div className={styles.navIcons}>
        <img
          className={styles.interfaceSearchMagnifying1}
          alt=""
          src="assets/Search_Magnifying_Glass.svg"
          onClick={handleSearchBox}
          style={{
            display: lastSegment === "search" ? "none" : "inline-block",
          }}
        />
        <img
          className={styles.interfaceSearchMagnifying1}
          alt=""
          src="assets/hamburger menu.svg"
          onClick={handleSidebar}
        />
      </div>

     {showSidebar && <div className={styles.sidebar}>
        <div className={styles.items}>
          <div className={styles.close} onClick={handleSidebar}>
          <Close/>
          </div>
          <div className={styles.link}>
            <div
              className={activeLink === "home" ? styles.active : ""}
              onClick={() => {
                handleLinkClick("home");
                location("/");
              }}
            >
              Home
            </div>
          </div>
          <div className={styles.link}>
            <div
              className={activeLink === "pro" ? styles.active : ""}
              onClick={() => {
                handleLinkClick("pro");
                location("/search");
              }}
            >
              Find Professionals
            </div>
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
