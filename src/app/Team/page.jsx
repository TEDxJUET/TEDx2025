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

function page() {
  return (
    <div className='select-none'>
      <Navbar/>

       
        <div className="section-dark">
        
          <div className="speaker-section">
            <div className="title-bar">
              <div className="title-heading">Our Team</div>
              <div className="link-list"><a href="https://www.ted.com/tedx/events/62368">View Event Details</a></div>
            </div>
            <div className="speaker-cards">
              {team.map((item, index)=>(

              <Teamcard key={index} image={item.img?item.img:'profile.png'} name={item.name} post={item.post}  team={item.team} inurl={item.in_url}/>
              ))}
           
            </div>
          </div>
        </div>
      
      <Footer/>
    </div>
  )
}

export default page