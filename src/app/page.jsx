"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Speaker_card from "@/components/Speaker_card";
import "./globals.css";
import { motion } from "framer-motion";
import LeftAbout from "@/components/LeftAbout";
import RightAbout from "@/components/RightAbout";

const cardData = [
  { id: 1, title: 'Card 1', description: 'Description for Card 1' },
  { id: 2, title: 'Card 2', description: 'Description for Card 2' },
  { id: 3, title: 'Card 2', description: 'Description for Card 2' },
  { id: 4, title: 'Card 2', description: 'Description for Card 2' },
  { id: 5, title: 'Card 2', description: 'Description for Card 2' },
  { id: 6, title: 'Card 2', description: 'Description for Card 2' },
  { id: 7, title: 'Card 2', description: 'Description for Card 2' },
  { id: 7, title: 'Card 2', description: 'Description for Card 2' },
  { id: 7, title: 'Card 2', description: 'Description for Card 2' },
  { id: 7, title: 'Card 2', description: 'Description for Card 2' },
  { id: 7, title: 'Card 2', description: 'Description for Card 2' },
  { id: 7, title: 'Card 2', description: 'Description for Card 2' },
  { id: 7, title: 'Card 2', description: 'Description for Card 2' },
  { id: 7, title: 'Card 2', description: 'Description for Card 2' },
  { id: 7, title: 'Card 2', description: 'Description for Card 2' },
  { id: 7, title: 'Card 2', description: 'Description for Card 2' },
  { id: 7, title: 'Card 2', description: 'Description for Card 2' },
  { id: 7, title: 'Card 2', description: 'Description for Card 2' },
  { id: 7, title: 'Card 2', description: 'Description for Card 2' },
  { id: 7, title: 'Card 2', description: 'Description for Card 2' },
  // Add more cards as needed
];


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

export default function Home() {
  return (
    <div >
      <Navbar/>
      <section className="h-[100vh] w-[100%] bg-[white] flex items-center justify-center strt select-none">
       
    <div className="text-container">
    <div>TED <sup>x</sup> JUET</div>
    <div>Local, Independently organized event at JUET Guna.</div>
    <div>Goes beyond mere echoes</div>
    <div>Resonance</div>
    <div>Happening on Saturday, 3'rd May , 2025</div>
    </div>
      </section>

      {/* About part */}
      <section className="min-h-[600px] w-[100%] bg-[#0D0D0D] text-blue-50 overflow-hidden relative select-none">
        <div className="max-w-8xl mx-auto h-full">
          <div className="grid md:grid-cols-2  min-h-[400px] md:min-h-[500px] h-full w-[100%]">
            <LeftAbout/>
            <RightAbout/>
          </div>
        </div>
      </section>
      
      <h1 className=" text-center text-[28px] font-[500] p-[20px]">2025 Speakers</h1>
      <motion.section className="min-h-[400px] w-[100%] bg-[white] spk flex items-center justify-center flex-wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
      <Speaker_card/>
      <Speaker_card/>
      <Speaker_card/>
      <Speaker_card/>
      <Speaker_card/>
      <Speaker_card/>
      <Speaker_card/>
      <Speaker_card/>
      <Speaker_card/>
      <Speaker_card/>
      <Speaker_card/>
      <Speaker_card/>
      
      </motion.section>

     <section className="bg-[#0D0D0D] h-[520px] w-[100%] pst mt-[30px] sm:bg-[#0D0D0D] sm:h-[830px] sm:w-[100%] pst sm:mt-[30px]"> 

    |<h1 className="text-[white] text-[28px] font-[600] mt-5 text-center">Ted <sup>x</sup> JUET <span className="text-[#FD3A00]">2023 Events</span></h1>

<div className="wrapper">
  <div className="item item1 "></div>
  <div className="item item2 "></div>
  <div className="item item3 "></div>
  <div className="item item4 "></div>
  <div className="item item5 "></div>
  <div className="item item6 "></div>
  <div className="item item7 "></div>
  <div className="item item8 "></div>
</div>


     </section>

    <Footer/>
    </div>
  );
}
