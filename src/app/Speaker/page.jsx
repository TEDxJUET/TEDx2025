"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Speaker_card from '@/components/Speaker_card'
import "../globals.css"
import AnimatedTextContent from '@/components/AnimatedTextContent'
import ProfileCard from '@/components/ProfileCard'

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay each child animation
      delayChildren: 0.3, // Delay before animation starts
    },
  },
};

function page() {
  return (
    <div className='select-none'>
      <Navbar/>
       
        <div className="section-dark">
          <div className="speaker-section">
            <div className="title-bar">
              <div className="title-heading">Our Speakers</div>
              <div className="link-list"><a href="https://www.google.com">View Event Details</a></div>
            </div>
            <div className="speaker-cards">
              <ProfileCard image="profile.png" name="Someone Interesting" occupation="Coming Soon" />
              <ProfileCard image="profile.png" name="Someone Interesting" occupation="Coming Soon" />
              <ProfileCard image="profile.png" name="Someone Interesting" occupation="Coming Soon" />
              <ProfileCard image="profile.png" name="Someone Interesting" occupation="Coming Soon" />
              <ProfileCard image="profile.png" name="Someone Interesting" occupation="Coming Soon" />
              <ProfileCard image="profile.png" name="Someone Interesting" occupation="Coming Soon" />
              <ProfileCard image="profile.png" name="Someone Interesting" occupation="Coming Soon" />
            </div>
          </div>
        </div>
      
      <Footer/>
    </div>
  )
}

export default page