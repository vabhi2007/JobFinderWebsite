import React, {useState} from 'react'
import "./Jobs.css"
import plantBackground from "./images/plant background trimmed.png"
import Filters from './filters'
import JobListings from './JobLIstings';


const allJobs = [
  {
    name: "Environmental Scientist",
    location: "Seattle, WA",
    place: "In Person",
    description: "Conduct research to understand and mitigate the impact of human activities on the environment. ",
    duration: "Full-Time",
    role: "Scientist"
  },
  {
    name: "Renewable Energy Analyst",
    location: "New York City, NY",
    place: "Hybrid",
    description: "Analyze data to assess the feasibility and efficiency of renewable energy projects, such as solar, wind, or bioenergy. ",
    duration: "Part-Time",
    role: "Analyst"
  },
  {
    name: "Environmental Engineer",
    location: "London, UK",
    place: "Remote",
    description: "Responsibilities include designing and implementing eco-friendly technologies, assessing environmental impacts, and ensuring compliance with regulations. ",
    duration: "Internship",
    role: "Engineer"
  }

];
const Jobs = () => {
  const [location, changeLocation] = useState("");
  const [places, changePlaces] = useState([]);
  const [durations, changeDurations] = useState([]);
  const [roles, changeRoles] = useState([]);

  const addFilter = (type, value) => {
    switch(type) {
      case "location":
        changeLocation(value);
        break;
      case "place":
        changePlaces(prev => [...prev, value]);
        break;
      case "duration":
        changeDurations(prev => [...prev, value]);
        break
      case "role":
        changeRoles(prev => [...prev, value]);
        break;
    }
    // console.log(type, value);
  }

  const removeFilter = (type, value) => {
      switch(type) {
        case "location":
          changeLocation("");
          break;
        case "place":
          changePlaces(prev => {
            let i = prev.indexOf(value);
            return [...prev.splice(i, 1)]
          });
          break;
        case "duration":
          changeDurations(prev => {
            let i = prev.indexOf(value);
            return [...prev.splice(i, 1)]
          });
          break;
        case "role":
          changeRoles(prev => {
            let i = prev.indexOf(value);
            return [...prev.splice(i, 1)]
          })
          break;
      }
  }

  const jobsToRender = allJobs.filter(job => {
    if(location.length != "" && location !== job.location) return false;
    if(places.length != 0 && !places.includes(job.place)) return false;
    if(durations.length != 0 && !durations.includes(job.duration)) return false;
    if(roles.length != 0 && !roles.includes(job.role)) return false;
    return true;
  })

  console.log(jobsToRender);
  // console.log()

  return (
    <div>
      
      <section className="landing-page">
        {/* Background Image */}
        <img className = "img" src={plantBackground}></img>
        {/* Content */}
        <div className="landing-content">
          <p className="welcome-message">Discover your <br /> next Job!</p>
          <p className="caption">Explore your passions.</p>
          {/* Use Link to navigate to the JobsPage */}
          
        </div>
      </section>
      
      
      
      <Filters addFilter={addFilter} removeFilter={removeFilter}/>
      <JobListings jobs={jobsToRender}/>
    </div>
  )
}

export default Jobs
