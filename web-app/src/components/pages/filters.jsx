import React from 'react'
import "./filters.css"
import FilterButton from './filterButton'
const Filters = () => {
  return (
    <div>
      <div className='filters'>
        
        <div className='outer-box'>
          <div className='title'>Jobs at Verdantia</div>
            <div className='filter1'><FilterButton text='All Jobs'/></div>
            <div className='filter2'><FilterButton text='Engineer'/></div>
            <div className='filter3'><FilterButton text='Analyst'/></div>
            <div className='filter4'><FilterButton text='Manager'/></div>
            <div className='filter5'><FilterButton text='Scientist'/></div>
            <div className='filter6'><FilterButton text='Coordinator'/></div>
            <div className='filter7'><FilterButton text='Full Time'/></div>
            <div className='filter8'><FilterButton text='Part Time'/></div>
            <div className='filter9'><FilterButton text='Internship'/></div>
              
            
            
        </div>
      </div>
    </div>
  )
}

export default Filters
