import React, { useState } from "react";
import styles from "./searchBox.module.css";
import { usePathname, useRouter } from "next/navigation";

interface Iprops {
  searchText?: string;
  onSearchTextChange?: any;
}
const SearchBox: React.FC<Iprops> = ({ onSearchTextChange }) => {
  const location = usePathname();
  const segments = location.split("/");
  const lastSegment = segments[segments.length - 2];

const router= useRouter();

  const [text, setText] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(lastSegment === 'profile'){
      e.preventDefault();
      router.push(`/search?query=${encodeURIComponent(text)}`);
    }
    else{
      onSearchTextChange(text);
    }
  };
  if(text == "") onSearchTextChange("");
  return (
    <form onSubmit={handleSubmit} className={styles.searchbox}>
      <div className={styles.searchbar}>
        <img src="/assets/Search_Magnifying_Glass.svg" alt="search" />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search by Name"
        />
      </div>
      <div>
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchBox;
