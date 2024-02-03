import React from 'react'
import "./home.css"
import plantBackground from "./images/plant background trimmed.png"

const Benefits = () => {
  const handleSeeMoreClick = () => {
    const targetElement = document.getElementById('scrollToSection'); // Adjust the ID to your target section
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div>
    <div>
      
      <div className='imageBox'>
        <img className = "img" src={plantBackground}></img>
      </div>
   
    </div>
    </div>
  )
}

export default Benefits
