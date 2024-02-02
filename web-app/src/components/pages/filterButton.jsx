import React from 'react'
import "./filterButton.css"
import PropTypes from 'prop-types'

const FilterButton = ({text}) => {
  return (
    <div className='button'>
        {text}
    </div>
  )
}
FilterButton.propTypes = {
  text: PropTypes.string.isRequired
}
export default FilterButton
