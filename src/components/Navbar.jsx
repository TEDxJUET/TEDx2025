import React from 'react'
import '../app/globals.css'
import { useState } from 'react'



export default function Navbar() {

  const [bar,setbar] = useState(true);

  return (
    <nav className={` sm:h-[80px] sm:w-[100%]  sm:fixed sm:top-0 sm:z-50 sm:bg-[white] sm:flex sm:items-center sm:justify-between sm:select-none sm:flex-row ${bar=== true?'h-[100%] w-[100%] fixed z-50 bg-[white] bottom-0  flex justify-start items-center flex-col right-0 left-0':'h-[60px] fixed z-50 bg-[white] w-[100%]  flex justify-start items-center flex-col '} transition ease-in-out duration-600`}>
      <div className={`sm:flex sm:items-center sm:justify-center sm:p-[20px] sm:flex-row flex-col flex items-center justify-center `}>
      <div className="sm:flex sm:items-center sm:mt-0 flex items-center mt-3">
              <span className="text-[#FD3A00] font-[900]  text-4xl">TED <sup>x</sup></span>
              <span className="text-black  font-[300] text-4xl ml-1">JUET</span>
      </div>
      <button className={`sm:h-[45px] sm:w-[120px] sm:block sm:mt-0 sm:rounded-md sm:bg-[#FD3A00]  sm:text-[white] sm:text-[17px] sm:ml-[20px] sm:cursor-pointer sm:hover:bg-[black] sm:transition-colors sm:duration-300 ${bar===true?'mt-5 h-[35px] w-[290px] rounded-md bg-[#FD3A00] text-[white] ':'hidden'}`}>ATTEND</button>
      </div>
      <ul className={`sm:flex sm:items-center sm:justify-evenly sm:h-[50px] sm:w-[570px]  sm:cursor-pointer sm:flex-row sm:font-style  ${bar === true?' flex items-center justify-evenly flex-col h-[350px] w-[300px]   cursor-pointer font-style ':'hidden'}`}>
        <li className='hover:underline'>ABOUT</li>
        <li className='hover:underline'>SPEAKERS</li>
        <li className='hover:underline'>TEAM</li>
        <li className='hover:underline'>EVENTS</li>
        <li className='hover:underline'>CONTACT US</li>
      </ul>
      <svg onClick={()=>setbar(true)} xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="gray" className={`sm:hidden ${bar===false?'block absolute right-[20px] top-[20px]':'hidden'}`} viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
      <svg onClick={()=>setbar(false)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className={`sm:hidden ${bar===true?'block absolute right-[20px] top-[20px]':'hidden'}`} viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
      </svg>
    </nav>
  )
}
