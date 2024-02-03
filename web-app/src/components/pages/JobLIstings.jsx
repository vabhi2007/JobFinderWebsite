import React from 'react'
import JobListing from './jobListing'
import './JobListings.css'

import PropTypes from 'prop-types'






const JobLIstings = ({ jobs }) => {
  return (
    <div className='listings'>
        <div className='listingBox'>
            {jobs.map((job, i) => (
              <JobListing 
              //Various parts of each job
                key={i}
                JobName={job.name}
                JobLocation={job.location}
                JobDescription={job.description}
                JobPlace={job.place}
                JobDuration={job.duration}
              />
            ))}
        </div>
    </div>
  )
}
JobLIstings.propTypes = {
  jobs: PropTypes.any.isRequired
}


export default JobLIstings
