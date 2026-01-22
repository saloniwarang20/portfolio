import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ scrollToSection, refs }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setMobileOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">Portfolio</h2>
        <button
          className={`hamburger ${mobileOpen ? "active" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${mobileOpen ? "active" : ""}`}>
          <li>
            <a href="#" onClick={() => handleNavClick(refs.aboutRef)}>About</a>
          </li>
          <li>
            <a href="#" onClick={() => handleNavClick(refs.projectsRef)}>Projects</a>
          </li>
          <li>
            <a href="#" onClick={() => handleNavClick(refs.skillsRef)}>Skills</a>
          </li>
          <li>
            <a href="#" onClick={() => handleNavClick(refs.resumeRef)}>Resume</a>
          </li>
          <li>
            <a href="#" onClick={() => handleNavClick(refs.contactRef)}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
