"use client"
import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import Navbar from '@/app/components/Navbar1'
import RatingBox from '@/app/addRating/components/RatingBox'
import Footer from '@/app/components/Footer'
import { fetchUserDetails } from '@/Api\'s'
import { usePathname } from 'next/navigation'
import { PersonalDetails } from '@/Api\'s/interface/PersonDetails'

const AddReview = () => {
  const url = usePathname();
  const segments = url ? url.split('/') : [];
  const lastSegment = segments.length > 0 ? segments[segments.length - 1] : "";

  const [data, setData]= useState<PersonalDetails | null>(null);

  useEffect(()=>{
    fetchUserDetails(lastSegment).then((res)=>{
      setData(res.data.payload.personalDetails);

      console.log(data);
      
    }).catch((err)=>{
      console.error("Error while fetching userData: ", err);
    })
  },[])

  return (
    <div className={styles.add_review_parent}>
        <div className={styles.navbar_wrapper}>
        <Navbar/>
        </div>
        <div className={styles.hero}>
            <div className={styles.hero_content}>
                <div className={styles.heading}>Add Your Rating (100% Anonymous)</div>
                <div className={`${styles.heading} ${styles.heading_mobile}`}>Add General Contractor Details</div>
                <div className={styles.subheading}>Help others choose better partner to work with</div>
            </div>
        </div>

        <RatingBox data={data}/>
        
        <Footer/>
    </div>
  )
}

export default AddReview