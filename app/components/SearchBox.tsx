import React, { useState } from "react";
import styles from "./searchBox.module.css";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBox: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("query");
  const loc = searchParams.get("loc");
  
  console.log(search, loc);
  const [text, setText] = useState<string | null>(search);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (text) router.push(`/search?query=${encodeURIComponent(text)}`);
  };

  if(text === "") router.push(`/search`)

  return (
    <form onSubmit={handleSubmit} className={styles.searchbox}>
      {/* <div className={styles.searchbar}>
        
      </div> */}
        <img src="/assets/Search_Magnifying_Glass.svg" alt="search" />

      <div className={styles.input_wrapper}>
        <input
          type="text"
          value={text || ""}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search by Name"
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
