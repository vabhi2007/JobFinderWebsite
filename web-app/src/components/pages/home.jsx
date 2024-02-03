// src/HomePage.jsx
import React, { useState } from 'react';
import './home.css';
import slide1 from "./images/slide1.jpg"
import slide2 from "./images/slide2.jpg"
import slide3 from "./images/slide3.jpg"
import slide4 from "./images/slide4.jpg" 
import slide5 from "./images/slide5.jpg"

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: slide1, title: "Reforestation Initiatives", caption: "Verdantia has successfully planted over 500,000 trees in deforested regions, contributing to the restoration of critical ecosystems and providing habitat for various wildlife species." },
    { image: slide2, title: "Carbon Neutrality Achieved", caption: "Through innovative technologies and sustainable practices, Verdantia has achieved carbon neutrality across its operations, making significant strides in reducing its carbon footprint." },
    { image: slide3, title: "Eco-Education Outreach", caption: "Verdantia's dedicated teams have conducted eco-education programs in local communities, reaching over 10,000 individuals and inspiring environmentally conscious practices." },
    { image: slide4, title: "Smart City Collaboration", caption: "Verdantia's smart city solutions with progressive municipalities have lowered energy usage, enhanced waste management efficiency, and elevated urban sustainability." },
    { image: slide5, title: "Biodiversity Conservation", caption: "Verdantia actively supports biodiversity conservation efforts by protecting endangered species and preserving vital habitats." },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="homepage">
      {/* Section 1: Landing Page */}
      <section className="landing-page">
        {/* Background Image */}
        <div className="landing-background-image"></div>
        {/* Content */}
        <div className="landing-content">
          <p className="welcome-message">Welcome to <br /> Verdantia!</p>
          <p className="caption">Where Sustainability meets Innovation.</p>
          <button className="join-button">Join the team</button>
        </div>
      </section>

      {/* Section 2: About Our Company */}
      <section className="about-section">
        <p className="about-title">About Our Company</p>
        <div className="about-content">
          <p className="about-mission">Our Mission</p>
          {/* Container for text and image */}
          <div className="about-text-and-image-container">
            <div className="about-text">
              <p className="about-paragraph">
                At Verdantia, our mission is to revolutionize environmental sustainability by seamlessly integrating technology and human impact. We believe in a holistic approach, leveraging cutting-edge innovations alongside direct, hands-on efforts to create a more sustainable and resilient future for our planet.
              </p>
            </div>
            <div className="about-image"></div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider1"></div>

      {/* Section 3: Our Values */}
      <section className="values-section">
        <p className="values-title">Our Values</p>
        <div className="value-container">
          <div>
            <p className="values-subheading">01 - Environmental Awareness</p>
            <p className="values-ptext">We inspire positive change through mindful environmental awareness and education.</p>
          </div>
          <div className="values-icon1"></div>
          {/* Icon 1 */}
        </div>
        <div className="value-container">
          <div>
            <p className="values-subheading">02 - Collaboration</p>
            <p className="values-ptext">We thrive using collaboration, leveraging its power for meaningful change in sustainability.</p>
          </div>
          <div className="values-icon2"></div>
          {/* Icon 2 */}
        </div>
        <div className="value-container">
          <div>
          <p className="values-subheading">03 - Leadership</p>
          <p className="values-ptext">Guided by visionary leadership, we aim to inspire a sustainable future through innovation and determination.</p>
          </div>
          <div className="values-icon3"></div>
          {/* Icon 3 */}
        </div>
        <div className="value-container">
          <div>
            <p className="values-subheading">04 - Responsibility</p>
            <p className="values-ptext">Responsibility is central to Verdantia, guiding decisions with integrity as well as transparency for sustainable initiatives.</p>
          </div>
          <div className="values-icon4"></div>
          {/* Icon 4 */}
        </div>
      </section>

      {/* Divider */}
      <div className="divider2"></div>

      {/* Section 4: Our Impacts */}
      <section className="impacts-section">
        <p>Our Impacts</p>
        {/* Slideshow */}
        <div className="slideshow">
          <button className="prev" onClick={prevSlide}>&#10094;</button>
          <div className="slide-title">{slides[currentSlide].title}</div>
          <div className="slide" style={{ backgroundImage: `url(${slides[currentSlide].image})`, opacity: '0.7' }}></div>
          <div className="slide-caption">{slides[currentSlide].caption}</div>
          <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
        {/* Subheading, Image, Text (for each slide) */}
      </section>

      {/* Final Join Button */}
      <div className="final-join-button">
        <button className="join-button">Join the team</button>
      </div>
    </div>
  );
};

export default HomePage;
