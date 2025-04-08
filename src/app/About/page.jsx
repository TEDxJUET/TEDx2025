"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
    <div className="select-none bg-white text-gray-800 min-h-screen">
      <Navbar />

      <div className="sm:h-[250px]  sm:mt-[80px] sm:w-[100%] sm:flex sm:items-center sm:justify-start pst sm:bg-[#0D0D0D] h-[130px]  mt-[60px] w-[100%] flex items-center justify-start pst bg-[#0D0D0D]">
        {" "}
        <h1 className="text-[#FD3A00] sm:text-[35px] font-[600] relative sm:left-[150px] left-[30px] text-[25px] ">
          ABOUT US
        </h1>{" "}
      </div>

      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#FD3A00] text-3xl sm:text-4xl font-bold mb-4">
                ABOUT TED<sup>X</sup>
                <span className="text-gray-800">JUET</span>
              </h2>

              <h3 className="text-gray-800 text-3xl sm:text-5xl font-bold mt-8 mb-8 leading-tight">
                INNOVATING.
                <br />
                CREATING.
                <br />
                DEVELOPING.
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                TEDxJUET is a local, independently organized event at JUET Guna
                that strives to recreate the unique experience found at TED,
                where the world's leading thinkers and doers congregate to share
                what they are most passionate about. We aim to provide a
                platform for curious individuals who seek to discover ideas and
                spark conversations in their own community.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg mt-4">
                In the past we have successfully brought together people from
                across the length and breadth of our country along with locals
                in the past, to not just motivate our students but, also to
                inspire them to form a positive environment to stimulate the
                desire to collaborate and change not just the world of
                technology and innovation, but every field that they touch.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg mt-4">
                It is an event that aims to celebrate and propagate the power of
                ideas among the denizens of the magnificent campus of JUET.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-lg shadow-xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/tedxAboutimg.png"
                  alt="TEDxJUET"
                  width={500}
                  height={500}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FD3A00]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-end mb-8">
            <Link
              href="#"
              className="bg-[#FD3A00] text-white px-6 py-3 rounded-full flex items-center group hover:bg-[#e03500] transition-colors shadow-md"
            >
              <span className="font-medium">INTERESTED </span>
              <ArrowRight/>
            </Link>
          </div>

          <motion.div
            variants={itemVariants}
            className="text-[#FD3A00] uppercase text-sm sm:text-base tracking-wider mb-2 font-semibold"
          >
            CONFERENCE DATE - MAY 3RD, 2025
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-4xl font-bold mb-12 text-gray-800"
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
                className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl sm:text-6xl font-bold text-gray-800">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-gray-500 text-sm sm:text-base mt-2 font-medium">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              Join us for an unforgettable experience at TEDxJUET on May 3rd,
              2025.
            </p>
            <p className="text-[#FD3A00] font-medium mt-2">
              Mark your calendars and stay tuned for more updates!
            </p>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
