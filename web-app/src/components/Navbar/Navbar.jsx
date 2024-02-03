// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {NavLink} from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      
      <li className='Maintitle'> <b>VERDANTIA</b> | Careers</li>
      <div className='menu' onClick={
        () => {
          setMenuOpen(!menuOpen);
        }
      }>
          <span></span>
          <span></span>
          <span></span>
        </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><NavLink to = "/">Home</NavLink></li>
        <li><NavLink to = "/benefits">Benefits</NavLink></li>
        <li><NavLink to = "/jobs">Jobs</NavLink></li>
      </ul>
      
    </nav>
  )
}



