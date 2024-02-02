import React from 'react'
import "./home.css"
import "./Benefits.css"
import plantBackground from "./images/plant background trimmed.png"

const Benefits = () => {
  return (
    
    <div>
 
      <div className='imageBox'>
      <header className='header'>
          <h1>Career</h1>
          <h1>Benefits</h1>
        </header>
        <img className = "img" src={plantBackground}></img>
      </div>

    </div>

  )
}

export default Benefits
