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
   <div className='w-[100%] h-[100%] flex items-center justify-center bg-[#0B0B0B] '>
    <div className='mt-[100px] block md:hidden sm:hidden text-white'>
    <h1 className={loading===true?'text-whtie text-center':'hidden'}>Loading the form...</h1>

    <iframe onLoad={handleIframeLoad}  src="https://docs.google.com/forms/d/e/1FAIpQLSfAnWBBaZu3JMYfGQBjcgbQjFtHsMAQBeSZ1S3otBx9lQtQEQ/viewform?embedded=true" width="350" height="956" frameBorder="0" marginHeight="0" marginWidth="0"></iframe>
    </div>
    <div className='mt-[100px] hidden md:block sm:block text-white'>
    <h1 className={loading===true?'text-whtie text-center':'hidden'}>Loading the form...</h1>
    <iframe onLoad={handleIframeLoad} src="https://docs.google.com/forms/d/e/1FAIpQLSfAnWBBaZu3JMYfGQBjcgbQjFtHsMAQBeSZ1S3otBx9lQtQEQ/viewform?embedded=true" width="850" height="956" frameBorder="0" marginHeight="0" marginWidth="0"></iframe>
    </div>
   </div>
   <Footer/>
   </>
  )
}
