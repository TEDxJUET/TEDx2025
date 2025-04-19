"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Speaker_card from '@/components/Speaker_card'
import "../globals.css"
import AnimatedTextContent from '@/components/AnimatedTextContent'
import Teamcard from '@/components/TeamCard'

import { motion } from "framer-motion";


import {team} from '../../Team'





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


const handle_navigation = (x)=>{
  window.location.href = x;
  

}

function page() {
  return (
    <div className='select-none'>
      <Navbar/>

       
        <div className="section-dark">
        
          <div className="speaker-section">
            <div className="title-bar">
              <div className="title-heading">Events</div>
              <div className="link-list"><a href="https://www.ted.com/tedx/events/62368">View Event Details</a></div>
            </div>
            <div className="speaker-cards">

            <div className="profile-card" onClick={()=>{handle_navigation('https://www.ted.com/tedx/events/62368')}}>
            <img src='https://res.cloudinary.com/dvonarg5v/image/upload/v1745046725/reso_tsc6an.jpg' alt={""} className="profile-image" />
            <h2 className="profile-name text-[red]">2025 (Theme - Resonance)</h2>
            <p className="profile-occupation ">Ted <sup>x</sup> JUET Events</p>
            </div>

            <div className="profile-card" onClick={()=>{handle_navigation('https://www.ted.com/tedx/events/52449')}}>
            <img src='https://res.cloudinary.com/dvonarg5v/image/upload/v1744913785/image2_dnra1d.jpg' alt={""} className="profile-image" />
            <h2 className="profile-name text-[red]">2023 (Theme - Equilibrium)</h2>
            <p className="profile-occupation ">Ted <sup>x</sup> JUET Events</p>
            </div>

            <div className="profile-card" onClick={()=>{handle_navigation('https://www.ted.com/tedx/events/31363')}}>
            <img src='https://res.cloudinary.com/dvonarg5v/image/upload/v1745046352/ted2019_kba0m5.jpg' alt={""} className="profile-image" />
            <h2 className="profile-name text-[red]">2019 (Theme - Beyond The Horizon)</h2>
            <p className="profile-occupation ">Ted <sup>x</sup> JUET Events</p>
            </div>

            <div className="profile-card" onClick={()=>{handle_navigation('https://www.ted.com/tedx/events/26452')}}>
            <img src='https://res.cloudinary.com/dvonarg5v/image/upload/v1745046370/ted2018_wgy5rn.jpg' alt={""} className="profile-image" />
            <h2 className="profile-name text-[red]">2018 (Theme - Multifariousness)</h2>
            <p className="profile-occupation ">Ted <sup>x</sup> JUET Events</p>
            </div>
           
            </div>
          </div>
        </div>
      
      <Footer/>
    </div>
  )
}

export default page