// import Image from 'next/image'
// import styles from './page.module.css'
"use client";

import Search from "@/pages/Search";
import styles from "./page.module.css";
import UserProfile from "@/pages/UserProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
