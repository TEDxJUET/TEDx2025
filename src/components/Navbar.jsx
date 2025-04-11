import React, { useState } from "react";
import "./styles/Navbar.css";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname()


  const router = useRouter();

  const navigate_home = () =>{
    router.push('/')
  }
  const navigate_speaker = () =>{
    router.push('/Speaker')
  }
  const navigate_about = () =>{
    router.push('/About')
  }
  const navigate_team = () =>{
    router.push('/Team')
  }

  return (
    <nav className="navbar select-none">
      
        <div onClick={navigate_home} className="navbar__logo"></div>
  

      <div className="navbar__toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`navbar__links ${isOpen ? "active" : ""}`}>
        <li onClick={navigate_about} className={pathname ==='/About'?'text-[#EB0028]':'hover:text-[#EB0028]'}>About</li>
        <li onClick={navigate_speaker} className={pathname ==='/Speaker'?'text-[#EB0028]':'hover:text-[#EB0028]'}>Speakers</li>
        <li onClick={navigate_team} className={pathname ==='/Team'?'text-[#EB0028]':'hover:text-[#EB0028]'}>Team</li>
        <li className={pathname ==='/Event'?'text-[#EB0028]':'hover:text-[#EB0028]'}>Event</li>
        <li className={pathname ==='/Contact'?'text-[#EB0028]':'hover:text-[#EB0028]'}>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
