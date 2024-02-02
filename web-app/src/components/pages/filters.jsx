import React from 'react'
import "./filters.css"
import FilterButton from './filterButton'
const Filters = () => {
  return (
    <div>
      <div className='filters'>
        
        <div className='outer-box'>
          <div className='title'>Jobs at Verdantia</div>
            
              <button className='all-jobs'><FilterButton text='All Jobs'/></button>
              
            
            
        </div>
      </div>
    </div>
  )
}

export default Filters
