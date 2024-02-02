import React from 'react';
import "./home.css";
import plantBackground from "./images/plant background trimmed.png";

const Home = () => {
  return (
    <div className="center">
      <div className='imageBox'>
        <img className="img" src={plantBackground} alt="Plant Background" />
        <div className="textOverlay">
          <h1>Welcome to <br /> Verdantia!</h1>
          <p className="caption">Where Sustainability meets Innovation.</p>
          <button className="pillButton">Join the team</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
