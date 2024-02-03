import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './jobListing.css';
import JobForm from './JobForm';

const JobListing = ({ JobName, JobLocation, JobPlace, JobDescription, JobDuration }) => {

    // State to manage the visibility of the job form
    const [isFormVisible, setFormVisible] = useState(false);

    // Function to toggle the visibility of the job form
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
                    {JobLocation} | {JobPlace} | {JobDuration}
                </div>
                <div className='jobDescription'>
                    {JobDescription}
                </div>
                {/* Apply button with dynamic text based on form visibility */}
                <button className={isFormVisible ? 'applyButton clicked' : 'applyButton'} onClick={handleClick}>
                    {isFormVisible && <p>Close</p>}
                    {!isFormVisible && <p>Apply</p>}
                </button>
            </div>
            {/* Conditionally render the job form */}
            <div>{isFormVisible && <JobForm />}</div>
        </div>
    );
}

// PropTypes for type validation
JobListing.propTypes = {
    JobName: PropTypes.string.isRequired,
    JobLocation: PropTypes.string.isRequired,
    JobPlace: PropTypes.string.isRequired,
    JobDescription: PropTypes.string.isRequired,
    JobDuration: PropTypes.string.isRequired
}

export default JobListing;
