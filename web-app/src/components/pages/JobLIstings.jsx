import React from 'react'
import JobListing from './jobListing'
import './JobListings.css'
const JobLIstings = () => {
  return (
    <div className='listings'>
        <div className='listingBox'>
            <JobListing JobName='Environmental Scientist' JobLocation='Seattle, WA' JobPlace='In Person' 
            JobDescription='Conduct research to understand and mitigate the impact of human activities on the environment. ' 
            />
        </div>
    </div>
  )
}

export default JobLIstings
