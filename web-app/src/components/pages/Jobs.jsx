import React from 'react'
import "./Jobs.css"
import plantBackground from "./images/plant background trimmed.png"
import Filters from './filters'
import JobListings from './JobLIstings'
const Jobs = () => {
  return (
    <div>
      
      <div className='imageBox'>
        
      </div>
      <Filters/>
      <JobListings/>
    </div>
  )
}

export default Jobs
