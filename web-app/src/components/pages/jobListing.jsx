import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './jobListing.css'
import JobForm from './JobForm'
const JobListing = ({JobName, JobLocation, JobPlace, JobDescription}) => {

    const [isFormVisible, setFormVisible] = useState(false);

    const handleClick = () => {
        setFormVisible(!isFormVisible);
    }

  return (
    <div>
        <div className='joblisting'>
      <div className='jobName'>
        {JobName}
      </div>
      <div className='jobLocation'>
        {JobLocation} | {JobPlace}
      </div>
      <div className='jobDescription'>
        {JobDescription}
      </div>
      <button className='applyButton' onClick={handleClick}>Apply</button>
    </div>
   <div>{isFormVisible && <JobForm/>}</div>
    </div>
    
  )
}
JobListing.propTypes = {
    JobName: PropTypes.string.isRequired,
    JobLocation: PropTypes.string.isRequired,
    JobPlace: PropTypes.string.isRequired,
    JobDescription: PropTypes.string.isRequired,
    JobImage: PropTypes.any.isRequired
  }
export default JobListing
