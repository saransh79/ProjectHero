import React from 'react'
import { NextPage } from 'next'
import styles from './hero.module.css'
import SearchBox from '../../components/SearchBox'
interface Iprops{
searchText?: string;
onSearchTextChange?: any;
}
const Hero: React.FC<Iprops> = ({searchText, onSearchTextChange}) => {

  return (
    <div className={styles.hero}>
        <p>Our Professionals</p>
        <SearchBox 
        searchText= {searchText}
        onSearchTextChange= {onSearchTextChange}/>
    </div>
  )
}

export default Hero