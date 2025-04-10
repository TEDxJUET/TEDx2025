import React, { useState } from "react";
import "./styles/Navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo-link">
        <div className="navbar__logo"></div>
      </a>

      <div className="navbar__toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`navbar__links ${isOpen ? "active" : ""}`}>
        <li><a href="/About">About</a></li>
        <li><a href="/Speaker">Speakers</a></li>
        <li><a href="/Team">Team</a></li>
        <li><a href="/">Event</a></li>
        <li><a href="/">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
