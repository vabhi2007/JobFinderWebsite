import React, { useState} from 'react'
import "./filterButton.css"
import PropTypes from 'prop-types'

const FilterButton = ({text, onSelect, onDeselect}) => {

  const [isClicked, setIsCliked] = useState(false);
  const handleClick = () => {
    setIsCliked(!isClicked);
    if(!isClicked) {
      onSelect();
    } else {
      onDeselect();
    }
  }
  return (
    <button className={isClicked ? 'button clicked' : 'button'} onClick={handleClick}>{text}</button>
    
  )
}
FilterButton.propTypes = {
  text: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func
}
export default FilterButton
