import React from 'react'
import { motion } from "framer-motion";

export default function Speaker_card() {
  return (
    <motion.div className='z-20 h-[150px] w-[153px] m-1.5 bg-[#4d4d4d] sm:z-20 sm:h-[350px] sm:w-[400px] sm:m-5 sm:bg-[#4d4d4d] '
    variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    viewport={{ once: true, amount: 0.2 }}
    >

    </motion.div>
  )
}
