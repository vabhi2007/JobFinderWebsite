// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Link} from "react-router-dom"
export const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>Verdantia</li>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/benefits">Benefits</Link></li>
            <li><Link to = "/jobs">Jobs</Link></li>
        </ul>
    </nav>
  )
}



