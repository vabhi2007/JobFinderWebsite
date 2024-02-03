import React from 'react'
import "./home.css"
import "./Benefits.css"
import "./Benefits.css"
import plantBackground from "./images/plant background trimmed.png"
import family from "./images/family.png"
import health from "./images/health.png"
import ladder from "./images/ladder.png"
import meal from "./images/meal.png"
import retirement from "./images/retirement.png"

const Benefits = () => {
  const handleSeeMoreClick = () => {
    const targetElement = document.getElementById('employee-benefits'); 
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (

    
    <div className='entirePage'>
      <section>
       <div className="landing-background-image"></div>

        <header className='header-career'>
          <p>Career</p>
        </header>
        <header className='header-benefits'>
          <p>Benefits</p>
        </header>  
        <div className="seeMoreButton">
          <button className="trackButton"onClick={handleSeeMoreClick}>See More</button>
        </div>        


      </section>
    
      <section className='scrollToSection'>
      {/*Employee Benefits Heading*/}
        <header id="employee-benefits" className="employee-benefits">
          <p>Employee Benefits</p>
        </header>
        <div id='box1' className="box1">
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
        <div className='benefit-desc'>
          
          <p>Our company prioritizes and takes care of employees through a holistic approach centered on
             open communication, flexible schedules, and continuous training. We invest in healthcare plans, 
             wellness initiatives, and mental health support, fostering a culture of 
            diversity, equity, and inclusion. By prioritizing the well-being of our team, we create an environment 
            where individuals can thrive both personally and professionally.</p>

        </div>

      </section>

      <div className="sustainable-background-image"></div>
      {/*Why Come to Verdantia Heading*/}

      <section>
      <header className="question">
        <p>Why come to Verdantia?</p>
      </header>
          <header className='reason1'>
            <p className='reason1-h'>1. We create a community</p>
            <p className='line-wrap'>
              We understand that success extends beyond individual accomplishments—it thrives within a vibrant community. 
              We take pride in cultivating an inclusive environment where collaboration is not just encouraged but celebrated.
              Our diverse team members bring a rich tapestry of experiences, ideas, and perspectives, fostering a sense of belonging 
              that transcends traditional workplace boundaries.
            </p>
          </header>
          
          <header className='reason2'>
          <p className='reason2-h'>2. You can define your own path</p>
            <p className='line-wrap'>
              At Verdantia, we believe that every individual brings a unique set of skills, talents, and aspirations to 
              the table. That's why we're proud to foster an environment where you don't just have a job – you have a 
              canvas to paint your career masterpiece!
            </p>

          </header>
          <header className='reason3'>
            <p className='reason3-h'>3. Opportunities to use cutting-edge tech</p>
            <p className='line-wrap'>
            We always say that the right tools empower our employees to reach new heights. Joining our team
              means gaining access to cutting-edge technology that isn't just a part of our work—it's at the
              core of our innovation. From state-of-the-art software solutions to the latest hardware advancements,
                we invest in technology that propels our workforce forward. When you choose a career with us, you're
                not just applying for a job; you're entering a world where your skills and ideas are amplified by the
                  very best in the industry.
            </p>
          </header>

  
        {/* <img className = "img" src={plantBackground}></img>    */}
        </section>
    </div>

  )
}

export default Benefits
