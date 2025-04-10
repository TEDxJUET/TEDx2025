"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import '../../components/styles/ImageSlider.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function AboutPage() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2025-05-03T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor(
        (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ months, days, hours, minutes, seconds });
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="select-none bg-[#0B0B0B] text-white min-h-screen">
      <Navbar />

      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="sm:h-[250px] sm:mt-[80px] sm:w-[100%] sm:flex sm:items-center sm:justify-start pst sm:bg-[#0D0D0D] h-[130px] mt-[60px] w-[100%] flex items-center justify-start pst bg-[#0D0D0D]"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-[#FD3A00] sm:text-[35px] font-[600] relative sm:left-[150px] left-[30px] text-[25px]"
        >
          ABOUT US
        </motion.h1>
      </motion.div> */}
      <div className="">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] "
      >
        <div className="max-w-7xl mx-auto mt-[60px]">
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h2
                variants={fadeInUp}
                className="text-[#ED1C24] text-3xl sm:text-4xl font-bold mb-4"
              >
                ABOUT TED<sup>X</sup>
                <span className="text-white">JUET</span>
              </motion.h2>

              <motion.h3
                variants={fadeInUp}
                className="text-white text-3xl sm:text-5xl font-bold mt-8 mb-8 leading-tight"
              >
                INNOVATING.
                <br />
                CREATING.
                <br />
                DEVELOPING.
              </motion.h3>

              <motion.p
                variants={fadeInUp}
                className="text-[#bbb] leading-relaxed text-lg"
              >
                TEDxJUET is a local, independently organized event at JUET Guna
                that strives to recreate the unique experience found at TED,
                where the world's leading thinkers and doers congregate to share
                what they are most passionate about. We aim to provide a
                platform for curious individuals who seek to discover ideas and
                spark conversations in their own community.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-[#bbb] leading-relaxed text-lg mt-4"
              >
                In the past we have successfully brought together people from
                across the length and breadth of our country along with locals
                in the past, to not just motivate our students but, also to
                inspire them to form a positive environment to stimulate the
                desire to collaborate and change not just the world of
                technology and innovation, but every field that they touch.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-[#bbb] leading-relaxed text-lg mt-4"
              >
                It is an event that aims to celebrate and propagate the power of
                ideas among the denizens of the magnificent campus of JUET.
              </motion.p>
            </div>

            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center"
            >
              <motion.div
                whileHover={{ rotate: 0, scale: 1.05 }}
                initial={{ rotate: 3 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-md aspect-square rounded-lg shadow-xl overflow-hidden transform hover:rotate-0 transition-transform duration-300"
              >
                <Image
                  src="/tedxAboutimg.png"
                  alt="TEDxJUET"
                  width={500}
                  height={500}
                  className="object-cover carousel-image"
                />
                <div className="absolute inset-0 "></div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex justify-end mb-8">
            <Button
              href="#"
              className="relative overflow-hidden px-8 py-5 rounded-md text-white mt-[30px] bg-[#ED1C24] flex items-center group transition-all duration-300 shadow-md"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#ED1C24] flex items-center gap-2">
                INTERESTED
                <ArrowRight />
              </span>
              <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="text-[#ED1C24] uppercase text-sm sm:text-base tracking-wider mb-2 font-semibold"
          >
            CONFERENCE DATE - MAY 3RD, 2025
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-4xl font-bold mb-12 text-[#fff]"
          >
            COUNT EVERY SECOND
            <br />
            UNTIL THE EVENT
          </motion.h2>

          <div className="grid grid-cols-5 gap-4 sm:gap-6">
            {[
              { value: timeLeft.months, label: "Months" },
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-[#1B1B1B]  rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              >
                <motion.div
                  className="text-4xl sm:text-6xl font-bold text-[#EB0028]"
                  animate={
                    item.label === "Seconds" ? { scale: [1, 1.05, 1] } : {}
                  }
                  transition={
                    item.label === "Seconds"
                      ? { repeat: Number.POSITIVE_INFINITY, duration: 1 }
                      : {}
                  }
                >
                  {String(item.value).padStart(2, "0")}
                </motion.div>
                <div className="text-gray-500 text-sm sm:text-base mt-2 font-medium">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#bbb] text-lg">
              Join us for an unforgettable experience at TEDxJUET on May 3rd,
              2025.
            </p>
            <p className="text-[#ED1C24] font-medium mt-2">
              Mark your calendars and stay tuned for more updates!
            </p>
          </div>
        </div>
      </motion.section>

      </div>

      <Footer />
    </div>
  );
}
