"use client"

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function page() {
    const [loading, setloading] = useState(true);

    const handleIframeLoad = () => {
        setloading(false);
        
      };

  return (
   <>
   <Navbar/>
   <div className='w-[100%] h-max  flex items-center justify-center bg-[#0B0B0B] '>
    <div className='mt-[100px] block md:hidden sm:hidden text-white'>
    <h1 className={loading===true?'text-whtie text-center':'hidden'}>Loading the form...</h1>

    <iframe onLoad={handleIframeLoad}  src="https://docs.google.com/forms/d/e/1FAIpQLSfAnWBBaZu3JMYfGQBjcgbQjFtHsMAQBeSZ1S3otBx9lQtQEQ/viewform?embedded=true" width="350" height="1900" frameBorder="0" marginHeight="0" marginWidth="0"></iframe>
    </div>
    <div className='mt-[100px] hidden md:block sm:block text-white'>
    <h1 className={loading===true?'text-whtie text-center':'hidden'}>Loading the form...</h1>
    <iframe onLoad={handleIframeLoad}  className=' overflow-hidden' src="https://docs.google.com/forms/d/e/1FAIpQLSfAnWBBaZu3JMYfGQBjcgbQjFtHsMAQBeSZ1S3otBx9lQtQEQ/viewform?embedded=true" width="850" height="1500" frameBorder="0" marginHeight="0" marginWidth="0"></iframe>
    </div>
   </div>
   <Footer/>
   </>
  )
}
