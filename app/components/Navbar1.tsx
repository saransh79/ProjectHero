"use client";
import React, { useState } from "react";
import styles from "./navbar1.module.css";
import SearchBox from "./SearchBox";
import { Close, KeyboardArrowUp, Search } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Iprops {
  showSearchBox?: boolean;
  handleSearchBox?: any;
}
const Navbar: React.FC<Iprops> = () => {
  const location = usePathname();
  const segments = location.split("/");
  const lastSegment = segments[segments.length - 2];
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string | null>("pro");
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  const handleLinkClick = (id: string) => {
    setActiveLink(id);
  };
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
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
            display: lastSegment === "profile" ? "inline-block" : "none",
          }}
          onClick={() => setShowSearchBox(true)}
        >
          <div className={styles.searchLink}>
            <Search/>
            <div>Search</div>
          </div>
        </div>
        <div className={styles.link}>
          <div
            className={activeLink === "home" ? styles.active : ""}
            onClick={() => {
              handleLinkClick("home");
            }}
          >
            <Link href="/" className={styles.searchLink}>
              Home
            </Link>
          </div>
        </div>
        <div className={styles.link}>
          <div
            className={activeLink === "pro" ? styles.active : ""}
            onClick={() => {
              handleLinkClick("pro");
            }}
          >
            <Link href="/">Find Professionals</Link>
          </div>
        </div>
      </div>

      <div className={styles.navIcons}>
        {!showSearchBox && (
          <img
            className={styles.interfaceSearchMagnifying1}
            alt=""
            src="/assets/Search_Magnifying_Glass.svg"
            onClick={() => setShowSearchBox(true)}
            style={{
              display: lastSegment === "profile" ? "inline-block" : "none",
            }}
          />
        )}
        <img
          className={styles.interfaceSearchMagnifying1}
          alt=""
          src="/assets/hamburger menu.svg"
          onClick={handleSidebar}
        />
      </div>

      {showSidebar && (
        <div className={styles.sidebar}>
          <div className={styles.items}>
            <div className={styles.close} onClick={handleSidebar}>
              <Close />
            </div>
            <div className={styles.link}>
              <Link
                href="/"
                className={activeLink === "home" ? styles.active : ""}
                onClick={() => {
                  handleLinkClick("home");
                }}
              >
                Home
              </Link>
            </div>
            <div className={styles.link}>
              <Link
                href="/"
                className={activeLink === "pro" ? styles.active : ""}
                onClick={() => {
                  handleLinkClick("pro");
                }}
              >
                Find Professionals
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Searchbox */}
      {showSearchBox && (
        <div className={styles.searchboxWrapper}>
          <div className={styles.content_wrapper}>
            <div className={styles.search_more}>Search more contractors</div>
            <div className={styles.searchbox_container}>
              <div className={styles.searchBox}>
                <SearchBox />
              </div>
              <div
                className={styles.toggler}
                onClick={() => setShowSearchBox(false)}
              >
                <KeyboardArrowUp />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
