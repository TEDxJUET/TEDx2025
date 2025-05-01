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
              <div className="link-list"><a href="https://www.ted.com/tedx/events/62368">View Event Details</a></div>
            </div>
            <div className="speaker-cards">
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1745819377/arpitdwivedi_opgf32.png" name="Arpit Dwivedi" occupation="Science Communicator and Rationalist" />
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1745819419/Farooq_chisty_ujg6fw.png" name="Farooq Chisty" occupation="Entrepreneur" />
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1745819629/gajendrapurohit_y6fuyq.png" name="Dr. Gajendra Purohit" occupation="YouTuber, Mathematics Educator, Professor" />
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1745819588/mohitsharma_fz4hbz.png" name="Mohit Sharma" occupation="Entrepreneur, Founder & CEO at Blacklisted" />
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1745819690/charvi_jain_idukvg.png" name="Charvi Jain" occupation="Psychologist, Entrepreneur" />
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1745819690/babulal_dahiya_n200bc.png" name="Babulal Dahiya" occupation="Farmer, Poet, and Conservationist" />
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1745819504/vrindagupta_zlhnnx.png" name="Vrinda Gupta" occupation="TEDx Speaker, Soft Skills Coach, and Corporate Trainer" />
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1746124493/sunny_gupta_h7gsng.png" name="Sunny Gupta" occupation="Visionary Life Coach, Academic Innovator, and Empowerment Leader" />
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1746124528/BHAWNA_DHARIYA_diohdg.png" name="Bhawna Dhariya" occupation="National-level Athlete, Adventurer" />
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1746124563/dheerajrathi_v0xr30.png" name="Dheeraj Rathi" occupation="Business strategist, financial advisor, and startup mentor" />
            </div>
          </div>
        </div>
      
      <Footer/>
    </div>
  )
}

export default page