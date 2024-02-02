import React, { useState } from 'react'
import "./LocationDropdown.css"
const LocationDropdown = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  }
  return (
    <div>
        <select id="locations" value={selectedLocation} onChange={handleLocationChange}>
            <option value="">Select</option>
            <option value="Seattle">Seattle</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
        </select>
        
    </div>
  )
}

export default LocationDropdown
