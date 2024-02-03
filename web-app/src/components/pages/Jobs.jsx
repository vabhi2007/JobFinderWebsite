import React, { useState } from 'react';
import "./Jobs.css";
import plantBackground from "./images/plant background trimmed.png";
import Filters from './filters';
import JobListings from './JobLIstings';

// Sample job data
const allJobs = [
  {
    name: "Environmental Scientist",
    location: "Seattle, WA",
    place: "In Person",
    description: "Conduct research to understand and mitigate the impact of human activities on the environment.",
    duration: "Full-Time",
    role: "Scientist"
  },
  {
    name: "Renewable Energy Analyst",
    location: "New York City, NY",
    place: "Hybrid",
    description: "Analyze data to assess the feasibility and efficiency of renewable energy projects, such as solar, wind, or bioenergy.",
    duration: "Part-Time",
    role: "Analyst"
  },
  {
    name: "Environmental Engineer",
    location: "London, UK",
    place: "Remote",
    description: "Responsibilities include designing and implementing eco-friendly technologies, assessing environmental impacts, and ensuring compliance with regulations.",
    duration: "Internship",
    role: "Engineer"
  },
  {
    name: "Carbon Footprint Manager",
    location: "Seattle, WA",
    place: "Hybrid",
    description: "Assess and analyze the carbon emissions of a company or its products, and providing methods for reducing and offsetting these emissions.",
    duration: "Full-Time",
    role: "Manager"
  },
  {
    name: "Forest Projects Coordinator",
    location: "Seattle, WA",
    place: "In Person",
    description: "Coordinate and oversee forest projects to ensure successful planning, execution, and environmental conservation efforts.",
    duration: "Full-Time",
    role: "Coordinator"
  }
];

const Jobs = () => {
  // State for filters
  const [location, changeLocation] = useState("");
  const [places, changePlaces] = useState([]);
  const [durations, changeDurations] = useState([]);
  const [roles, changeRoles] = useState([]);

  // Add filter based on type and value
  const addFilter = (type, value) => {
    switch (type) {
      case "location":
        changeLocation(value);
        break;
      case "place":
        changePlaces(prev => [...prev, value]);
        break;
      case "duration":
        changeDurations(prev => [...prev, value]);
        break;
      case "role":
        changeRoles(prev => [...prev, value]);
        break;
      default:
        break;
    }
  }

  // Remove filter based on type and value
  const removeFilter = (type, value) => {
    switch (type) {
      case "location":
        changeLocation("");
        break;
      case "place":
        changePlaces(prev => prev.filter(item => item !== value));
        break;
      case "duration":
        changeDurations(prev => prev.filter(item => item !== value));
        break;
      case "role":
        changeRoles(prev => prev.filter(item => item !== value));
        break;
      default:
        break;
    }
  }

  // Filter jobs based on selected filters
  const jobsToRender = allJobs.filter(job => {
    if (location !== "" && location !== job.location) return false;
    if (places.length !== 0 && !places.includes(job.place)) return false;
    if (durations.length !== 0 && !durations.includes(job.duration)) return false;
    if (roles.length !== 0 && !roles.includes(job.role)) return false;
    return true;
  });

  return (
    <div>
      {/* Landing Page Section */}
      <section className="landing-page">
        {/* Background Image */}
        <img className="img" src={plantBackground} alt="Plant Background"></img>
        {/* Content */}
        <div className="landing-content">
          <p className="welcome-message">Discover your <br /> next Job!</p>
          <p className="caption">Explore your passions.</p>
        </div>
      </section>
      
      {/* Filters Component */}
      <Filters addFilter={addFilter} removeFilter={removeFilter}/>
      {/* Job Listings Component */}
      <JobListings jobs={jobsToRender}/>
    </div>
  )
}

export default Jobs;
