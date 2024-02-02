import React from 'react'
import "./Jobs.css"
import plantBackground from "./images/plant background trimmed.png"
import Filters from './filters'
const Jobs = () => {
  return (
    <div>
      
      <div className='imageBox'>
        <div className='landing-title'>
          Careers
        </div>
        <img className = "img" src={plantBackground}></img>
      </div>
      <Filters/>
    </div>
  )
}

export default Jobs
