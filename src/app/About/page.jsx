"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Speaker_card from '@/components/Speaker_card'
import "../globals.css"

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
      <div className='sm:h-[250px]  sm:mt-[80px] sm:w-[100%] sm:flex sm:items-center sm:justify-start pst sm:bg-[#0D0D0D] h-[130px]  mt-[60px] w-[100%] flex items-center justify-start pst bg-[#0D0D0D]'>
       
          <h1 className='text-[#FD3A00] sm:text-[35px] font-[600] relative sm:left-[150px] left-[30px] text-[25px] ' >ABOUT US</h1>
    

      </div>
     <section className='w-[100%] h-[500px]'>

     </section>
      
      <Footer/>
    </div>
  )
}

export default page