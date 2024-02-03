import React, { useState } from 'react';
import "./LocationDropdown.css";

const LocationDropdown = ({ updateLocation }) => {
  // State for selected location
  const [selectedLocation, setSelectedLocation] = useState('');

  // Handle location change
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
    updateLocation(event.target.value);
  }

  return (
    <div>
      {/* Dropdown menu for selecting location */}
      <select id="locations" value={selectedLocation} onChange={handleLocationChange}>
        {/* Default option */}
        <option value="">All</option>
        {/* Options for specific locations */}
        <option value="Seattle, WA">Seattle</option>
        <option value="New York City, NY">New York</option>
        <option value="London, UK">London</option>
      </select>
    </div>
  );
}

export default LocationDropdown;
