import React, { useState } from 'react';
import "./filterButton.css";
import PropTypes from 'prop-types';

const FilterButton = ({ text, onSelect, onDeselect }) => {
  // State to track whether the button is clicked or not
  const [isClicked, setIsClicked] = useState(false);

  // Function to handle button click events
  const handleClick = () => {
    // Toggle the state of isClicked
    setIsClicked(!isClicked);
    
    // Invoke the onSelect callback if the button is clicked,
    // otherwise, invoke the onDeselect callback
    if (!isClicked) {
      onSelect();
    } else {
      onDeselect();
    }
  };

  return (
    // Button component with dynamic class based on isClicked state
    <button className={isClicked ? 'button clicked' : 'button'} onClick={handleClick}>
      {text}
    </button>
  );
};

// Prop types definition for the FilterButton component
FilterButton.propTypes = {
  text: PropTypes.string.isRequired, // Text displayed on the button
  onSelect: PropTypes.func, // Callback function invoked when button is selected
  onDeselect: PropTypes.func // Callback function invoked when button is deselected
};

export default FilterButton;
