import React, { useState } from 'react'
import "./LocationDropdown.css"
const LocationDropdown = ({ updateLocation }) => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
    updateLocation(event.target.value);
  }
  return (
    <div>
        <select id="locations" value={selectedLocation} onChange={handleLocationChange}>
            <option value="" >All</option>
            <option value="Seattle, WA">Seattle</option>
            <option value="New York City, NY">New York</option>
            <option value="London, UK">London</option>
        </select>
        
    </div>
  )
}

export default LocationDropdown
