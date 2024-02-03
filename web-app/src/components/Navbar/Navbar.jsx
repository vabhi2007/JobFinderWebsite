// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";

// Component for the navigation bar
export const Navbar = () => {
  // State for managing menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      {/* Title of the navigation bar */}
      <li className='Maintitle'>VERDANTIA | Careers</li>
      {/* Navigation links */}
      <ul className={menuOpen ? "open" : ""}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/benefits">Benefits</NavLink></li>
        <li><NavLink to="/jobs">Jobs</NavLink></li>
        <li><NavLink to="/citations">Citations</NavLink></li>
      </ul>
      {/* Menu icon */}
      <div className='menu' onClick={() => { setMenuOpen(!menuOpen); }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};
