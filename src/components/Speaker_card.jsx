import React from 'react'
import { motion } from "framer-motion";

export default function Speaker_card() {
  return (
    <motion.div className='z-20 h-[150px] w-[153px] m-1.5 mt-[20px] rounded-md bg-[#1B1B1B] sm:z-20 sm:h-[350px] sm:w-[400px] sm:m-5 sm:mt-[40px] sm:bg-[#1B1B1B] '
    variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    viewport={{ once: true, amount: 0.2 }}
    >

    </motion.div>
  )
}
