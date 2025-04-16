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
              <div className="link-list"><a href="https://www.google.com">View Event Details</a></div>
            </div>
            <div className="speaker-cards">

            <div className="profile-card" onClick={()=>{handle_navigation('https://www.ted.com/tedx/events/62368')}}>
            <img src='/profile.png' alt={""} className="profile-image" />
            <h2 className="profile-name text-[red]">2025</h2>
            <p className="profile-occupation ">Ted <sup>x</sup> JUET Events</p>
            </div>

            <div className="profile-card" onClick={()=>{handle_navigation('https://www.ted.com/tedx/events/52449')}}>
            <img src='/profile.png' alt={""} className="profile-image" />
            <h2 className="profile-name text-[red]">2023</h2>
            <p className="profile-occupation ">Ted <sup>x</sup> JUET Events</p>
            </div>

            <div className="profile-card" onClick={()=>{handle_navigation('https://www.ted.com/tedx/events/31363')}}>
            <img src='/profile.png' alt={""} className="profile-image" />
            <h2 className="profile-name text-[red]">2019</h2>
            <p className="profile-occupation ">Ted <sup>x</sup> JUET Events</p>
            </div>

            <div className="profile-card" onClick={()=>{handle_navigation('https://www.ted.com/tedx/events/26452')}}>
            <img src='/profile.png' alt={""} className="profile-image" />
            <h2 className="profile-name text-[red]">2018</h2>
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