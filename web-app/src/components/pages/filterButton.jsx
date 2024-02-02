import React, { useState} from 'react'
import "./filterButton.css"
import PropTypes from 'prop-types'

const FilterButton = ({text}) => {

  const [isClicked, setIsCliked] = useState(false);
  const handleClick = () => {
    setIsCliked(!isClicked);
  }
  return (
    <button className={isClicked ? 'button clicked' : 'button'} onClick={handleClick}>{text}</button>
    
  )
}
FilterButton.propTypes = {
  text: PropTypes.string.isRequired
}
export default FilterButton
