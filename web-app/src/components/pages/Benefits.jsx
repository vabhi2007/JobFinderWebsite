import React from 'react'
import "./Benefits.css"
import plantBackground from "./images/plant background trimmed.png"

const Benefits = () => {
  const handleSeeMoreClick = () => {
    const targetElement = document.getElementById('scrollToSection'); // Adjust the ID to your target section
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
    <div className='entirePage'>
      <div className='imageBox'>
      </div>

      <header className='header-career'>
        <p>Career</p>
      </header>
      <header className='header-benefits'>
        <p>Benefits</p>
      </header>  
      <div className="seeMoreButton">
        <button className="trackButton"onClick={handleSeeMoreClick}>See More</button>
      </div>        

      <div id="scrollToSection" className="scrollToSection">
      </div>
      

      {/*Employee Benefits Heading*/}
      <header className="employee-benefits">
        <p>Employee Benefits</p>
      </header>
      {/*Why Come to Verdantia Heading*/}
      <header className="question">
        <p>Why come to Verdantia?</p>
      </header>
          <header className='reason1'>
            <p className='reason1-h'>1. We create a community</p>
            <p>
              We understand that success extends beyond individual accomplishments—it thrives within a vibrant community. 
              We take pride in cultivating an inclusive environment where collaboration is not just encouraged but celebrated.
              Our diverse team members bring a rich tapestry of experiences, ideas, and perspectives, fostering a sense of belonging 
              that transcends traditional workplace boundaries.
            </p>
            {/* <p>
              Our community is built on a foundation of shared values and a collective vision for growth. From team-building activities 
              to open forums, we create spaces that encourage meaningful connections and open dialogue. At Verdantia, we believe that
                a united community not only fuels innovation but also enhances the overall well-being of our members, creating a supportive
                network that goes beyond the confines of the office.
            </p> */} 
          </header>
          
          <header className='reason2'>
          <p className='reason2-h'>2. You can define your own path</p>
            <p>
              At Verdantia, we believe that every individual brings a unique set of skills, talents, and aspirations to 
              the table. That's why we're proud to foster an environment where you don't just have a job – you have a 
              canvas to paint your career masterpiece!
            </p>
            {/* <p>
              At the heart of our company culture is the belief that career paths should be as diverse as the individuals
                who tread them. We encourage our employees not only to dream big but also to define their own trajectories.
                Whether you're a visionary innovator, a detail-oriented specialist, or a dynamic leader, Verdantia provides 
                the canvas, and you provide the brushstrokes.
            </p> */}
          </header>
          <header className='reason3'>
            <p className='reason3-h'>3. Opportunities to use cutting-edge tech</p>
            <p>
            We always say that the right tools empower our employees to reach new heights. Joining our team
              means gaining access to cutting-edge technology that isn't just a part of our work—it's at the
              core of our innovation. From state-of-the-art software solutions to the latest hardware advancements,
                we invest in technology that propels our workforce forward. When you choose a career with us, you're
                not just applying for a job; you're entering a world where your skills and ideas are amplified by the
                  very best in the industry.
            </p>
            {/* <p>
            Imagine a workplace where your ideas are not just heard but brought to life through the latest technological 
            advancements. At Verdantia, we provide our employees with a dynamic environment that encourages experimentation 
            and creativity. Our commitment to staying on the cutting edge means you'll have the tools to turn your 
            innovative concepts into reality. Join us and be part of a team that doesn't just adapt to change but 
            pioneers it, all fueled by the power of cutting-edge technology.
            </p> */}
          </header>

        <div className="box1">
          <div className='family' >
          </div>  
          <div className="box-content">
              <p>Unlimited Parental & Family Leave</p>
            </div>
        </div>

        <div className="box2">
          <div className="health">
          </div>
          <div className="box-content">
            <p>Extensive health insurance plans</p>
          </div>
        </div>

        <div className="box3">
          <div className="ladder">
          </div>
          <div className="box-content">
              <p>Great Career Progression</p>
          </div>
        </div>

        <div className="box4">
          <div className="retirement">
          </div>
          <div className="box-content">
              <p>Secure Retirement Plans</p>
            </div>
        </div>

        <div className="box5">
          <div className="meal">
          </div>
          <div className="box-content">
              <p>Healthy and Tasty Food Options</p>
            </div>
        </div>     
        <img className = "img" src={plantBackground}></img>   

    </div>

  )
}

export default Benefits
