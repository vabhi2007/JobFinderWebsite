import React from 'react'
import "./filters.css"
import FilterButton from './filterButton'
import LocationDropdown from './LocationDropdown'
const Filters = ({ addFilter, removeFilter}) => {
  return (
    <div>
      <div className='filters'>
        
        <div className='outer-box'>
          <div className='titleMain title'>Jobs at Verdantia</div>
            
            <div className='filter2'><FilterButton onSelect={() => {
              addFilter("role", "Engineer");
            }} onDeselect={() => {
              removeFilter("role", "Engineer")
            }}
            text='Engineer'/></div>
            <div className='filter3'><FilterButton onSelect={() => {
              addFilter("role", "Analyst");
            }} onDeselect={() => {
              removeFilter("role", "Analyst")
            }} text='Analyst'/></div>
            <div className='filter4'><FilterButton onSelect={() => {
              addFilter("role", "Manager");
            }} onDeselect={() => {
              removeFilter("role", "Manager")
            }} text='Manager'/></div>
            <div className='filter5'><FilterButton onSelect={() => {
              addFilter("role", "Scientist");
            }} onDeselect={() => {
              removeFilter("role", "Scientist")
            }} text='Scientist'/></div>
            <div className='filter1'><FilterButton onSelect={() => {
              addFilter("role", "Coordinator");
            }} onDeselect={() => {
              removeFilter("role", "Coordinator")
            }} text='Coordinator'/></div>
            <div className='filter7'><FilterButton onSelect={() => {
              addFilter("duration", "Full-Time");
            }} onDeselect={() => {
              removeFilter("duration", "Full-Time")
            }} text='Full Time'/></div>
            <div className='filter8'><FilterButton onSelect={() => {
              addFilter("duration", "Part-Time");
            }} onDeselect={() => {
              removeFilter("duration", "Part-Time")
            }} text='Part Time'/></div>
            <div className='filter9'><FilterButton onSelect={() => {
              addFilter("duration", "Internship");
            }} onDeselect={() => {
              removeFilter("duration", "Internship")
            }} text='Internship'/></div>
            <div className='dropdownTitle title'>Location</div>
            <div className='dropdown'><LocationDropdown 
              updateLocation={(val) => {
                addFilter("location", val);
              }}
            /></div>
            <div className='filter10'><FilterButton onSelect={() => {
              addFilter("place", "In Person");
            }} onDeselect={() => {
              removeFilter("place", "In Person")
            }} text='In Person'/></div>
            <div className='filter11'><FilterButton onSelect={() => {
              addFilter("place", "Hybrid");
            }} onDeselect={() => {
              removeFilter("place", "Hybrid")
            }} text='Hybrid'/></div>
            <div className='filter12'><FilterButton onSelect={() => {
              addFilter("place", "Remote");
            }} onDeselect={() => {
              removeFilter("place", "Remote")
            }} text='Remote'/></div>
   
        </div>
      </div>
    </div>
  )
}

export default Filters
