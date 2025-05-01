
"use client"
import React from "react";
import './globals.css';
import Navbar from "@/components/Navbar";
import SplitText from "@/components/SplitText";
import HeroSubtitle from "@/components/HeroSubtitle";
import AnimatedTextContent from "@/components/AnimatedTextContent";
import AnimatedTextContentSmall from '@/components/AnimatedTextContentSmall';
import ProfileCard from "@/components/ProfileCard";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import { useRouter } from 'next/navigation';

function App() {
  const router = useRouter();

  const navigate_team = () =>{
    router.push('/Team')
  }

  const navigate_register = () =>{
    router.push('/Register')
  }

  const navigate_brochure = () =>{
    router.push('/Brochure.pdf')
  }
  return (
    <>
    <Navbar />
    <main>
      <div className="hero-section">
        <div className="hero-background">
        </div>
        <div className="title-subtitle">
          <SplitText
            text="RESONANCE."
            className="hero-title"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          <HeroSubtitle />
          <div className="hero-links">
            <button className="hero-btn" onClick={navigate_register}>Get Passes!</button>
            <div className="link-list">
              <a href="/Brochure.pdf" target="_blank">Sponsorship Brochure</a>
             
            </div>
          </div>
          <div className="schedule text-white">3rd May 2025 - 10:00 am Onwards</div>
          <div className="address">
            <div className="line1">Jaypee University of Engineering & Technology,</div>
            <div className="line2">Guna, Madhya Pradesh - 473226.</div>
          </div>
        </div>
      </div>
      <div className="section-light">
        <AnimatedTextContent text="We witness profound social, communicational, ecological, economic, and technological changes. Through resonance, we explore how these shifts echo through individuals and communities. We aim to highlight the deep connections between these changes—and how each individual, through their actions and voice, becomes the resonance at the heart of transformation." />
        <AnimatedTextContentSmall text="We want to highlight both the impact and the ripple effects that arise from these transformations—and why it's vital to voice them. Changes occur across many dimensions, resonating differently through people and places. The idea of Resonance captures and connects all these shifts, reflecting how both individuals and society echo and respond to change." />
      </div>
      <div className="section-image"></div>
      <div className="section-dark">
        <AnimatedTextContent text="Join inspiring speakers and over a hundred guests!" />
        <div className="speaker-section">
          <div className="title-bar">
            <div className="title-heading">Our Speakers</div>
            <div className="link-list"><a href="https://www.ted.com/tedx/events/62368">View Event Details</a></div>
          </div>
          <div className="speaker-cards">
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1745819377/arpitdwivedi_opgf32.png" name="Arpit Dwivedi" occupation="Science Communicator and Rationalist" />
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1745819419/Farooq_chisty_ujg6fw.png" name="Farooq Chisty" occupation="Entrepreneur" />
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1745819629/gajendrapurohit_y6fuyq.png" name="Dr. Gajendra Purohit" occupation="YouTuber, Mathematics Educator, Professor" />
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1745819588/mohitsharma_fz4hbz.png" name="Mohit Sharma" occupation="Entrepreneur, Founder & CEO at Blacklisted" />
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1745819690/charvi_jain_idukvg.png" name="Charvi Jain" occupation="Psychologist, Entrepreneur" />
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1745819690/babulal_dahiya_n200bc.png" name="Babulal Dahiya" occupation="Farmer, Poet, and Conservationist" />
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1745819504/vrindagupta_zlhnnx.png" name="Vrinda Gupta" occupation="TEDx Speaker, Soft Skills Coach, and Corporate Trainer" />
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1746124493/sunny_gupta_h7gsng.png" name="Sunny Gupta" occupation="Visionary Life Coach, Academic Innovator, and Empowerment Leader" />
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1746124528/BHAWNA_DHARIYA_diohdg.png" name="Bhawna Dhariya" occupation="National-level Athlete, Adventurer" />
            <ProfileCard image="https://res.cloudinary.com/dvonarg5v/image/upload/v1746124563/dheerajrathi_v0xr30.png" name="Dheeraj Rathi" occupation="Business strategist, financial advisor, and startup mentor" />
            </div>
        </div>
      </div>
      <div className="section-red">
        <AnimatedTextContent text="TEDxJUET will take place on 3rd May 2025, 10:00 am onwards with an afterparty in the evening." />
        <AnimatedTextContentSmall text="Fifteen speakers and one hundred guests will join us at Jaypee University of Engineering and Technology — including representatives from academic and creative communities, entrepreneurs closely connected with innovation and culture, and influential intellectuals from across India." />
      </div>
      <div className="section-light">
        <AnimatedTextContent text="TEDxJUET-23 Photo Gallery" />
        <div style={{ width: "100%" }}>
          <ImageSlider />
        </div>
      </div>
      <div className="section-dark">
        <AnimatedTextContent text="Meet the passionate team behind the magic — a group of driven minds dedicated to crafting an unforgettable TEDxJUET experience!" />
        <div className="speaker-section">
          <div className="title-bar">
            <div className="title-heading">Know Our Team</div>
            <div className="link-list select-none hover:text-[#EB0028]" onClick={navigate_team}>View Team</div>
          </div>
        </div>
        <h1 className="select-none mt-[30px] text-[21px]">Our Sponsor</h1>
        <div className="flex items-center justify-between w-[250px] sm:w-[350px] mt-4 select-none"> 
          <img src="seoily.png" className="h-[30px] w-[60px] sm:h-[40px] sm:w-[70px]"  alt="" />
          <img src="zo.svg" className="h-[40px] w-[60px]"  alt="" />
          <img src="spon.png" className="h-[20px] w-[80px] sm:h-[35px] sm:w-[140px]"  alt="" />
        </div>
      </div>
    </main>
    <Footer />
  </>
  );
}

export default App;
