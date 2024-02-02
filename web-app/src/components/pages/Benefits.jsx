import React from 'react'
import "./home.css"
import plantBackground from "./images/plant background trimmed.png"

const Benefits = () => {
  return (
    <div>
      <header className='header'>
        <h1>Employee Benefits</h1>
      </header>
      <div className='imageBox'>
        <img className = "img" src={plantBackground}></img>
      </div>

    </div>
  )
}

export default Benefits
