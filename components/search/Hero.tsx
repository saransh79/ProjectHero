import React from 'react'
import { NextPage } from 'next'
import styles from './hero.module.css'
import SearchBox from '../SearchBox'
const Hero: NextPage = () => {
  return (
    <div className={styles.hero}>
        <p>Our Professionals</p>
        <SearchBox />
        {/* <div className={styles.searchbox}>
            <div className={styles.searchbar}>
                <img src='/assets/Search_Magnifying_Glass.svg' alt='search'/>
                <input type='text' placeholder='Search by Name or Phone Number'/>
            </div>
            <div>
                <button>Search</button>
            </div>
        </div> */}
    </div>
  )
}

export default Hero