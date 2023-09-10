import React from 'react'
import styles from './hero.module.css'
const Hero = () => {
  return (
    <div className={styles.hero}>
        <p>Our Professionals</p>
        <div className={styles.searchbox}>
            <div className={styles.searchbar}>
                <img src='/assets/Search_Magnifying_Glass.svg' alt='search'/>
                {/* <input type='text' placeholder='Search General Contractor by Name or Phone Number'/> */}
                <input type='text' placeholder='Search by Name or Phone Number'/>
            </div>
            <div>
                <button>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Hero