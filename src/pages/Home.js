import React from 'react';
import './Home.css'; // Importing CSS for styling
import background from './background.jpg';
import digi from './digi.jpg';
import java from './java.jpg';
import python from './python.jpg';
import js from './js.jpg';
import cpp from './cpp.jpg';
import pers from './pers.jpg';


const Home = () => {
  return (
      <div className="home-content">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Welcome to Our Urbon Pro Tutour Website</h1>
            <p>
              A good career is when our interest and abilities match together, unfortunately our interest
              can keep changing due to the circumstances and to the environment.
            </p>
            <button className="cta-button">Learn More...</button>
          </div>
          <div className="hero-image">
            <img
              src={background}
              alt="Hero"
              className="hero-img"
            />
            <div className='hero-content'>
              <p>Founded in 2024, Urban Pro Tutour Website started with a simple yet powerful idea: to bridge the gap between individuals and their dream careers. With a team of passionate career advisors, educators, and industry experts.</p>
            </div>
          </div>
        </section>

        <h1>Our Courses</h1>
        <section className="feature-section">
          <div className="feature">  
            <div className="feature-box">
            <a href="https://www.youtube.com/playlist?list=PLU2wpJsXyAjnmTQPc4KM7kP1dq2lnkQ5O" target="_blank" rel="noopener noreferrer"> <img 
              src={java}
              alt="Hero"
              className="hero-img"
            /></a>   
             
            <a href="https://www.youtube.com/playlist?list=PLU2wpJsXyAjnmTQPc4KM7kP1dq2lnkQ5O" target="_blank" rel="noopener noreferrer"><h2> Java Full Stack</h2></a>
            </div>
          </div>
          <div className="feature">
            <div className="feature-box">
            <a href="https://www.youtube.com/playlist?list=PLuJZH5pDX4GKrPyVImrii6mZ3kdwAOLvv" target="_blank" rel="noopener noreferrer"> <img
              src={python}
              alt="Hero"
              className="hero-img"
            /></a>
             
             <a href="https://www.youtube.com/playlist?list=PLuJZH5pDX4GKrPyVImrii6mZ3kdwAOLvv" target="_blank" rel="noopener noreferrer"><h2>Python Full Stack</h2></a>
            </div>
          </div>
          <div className="feature">
            <div className="feature-box">
            <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" target="_blank" rel="noopener noreferrer"> <img
              src={cpp}
              alt="Hero"
              className="hero-img"
            /></a>
             
             <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" target="_blank" rel="noopener noreferrer"><h2>C++</h2></a>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="feature">
            <div className="feature-box">
            <a href="https://www.youtube.com/playlist?list=PLUujFthL-cXkaqSWdcR4C7BtYjED12eLq" target="_blank" rel="noopener noreferrer"><img
              src={digi}
              alt="Hero"
              className="hero-img"
            /></a>
              
            <a href="https://www.youtube.com/playlist?list=PLUujFthL-cXkaqSWdcR4C7BtYjED12eLq" target="_blank" rel="noopener noreferrer"><h2>Digital Marketing</h2></a>
            </div>
          </div>
          <div className="feature">
            <div className="feature-box">
            <a href="https://www.youtube.com/playlist?list=PLruU8BdoC0U9jTPfpAZTedFm3xVPJValg" target="_blank" rel="noopener noreferrer"> <img
              src={pers}
              alt="Hero"
              className="hero-img"
            /></a>
             
            <a href="https://www.youtube.com/playlist?list=PLruU8BdoC0U9jTPfpAZTedFm3xVPJValg" target="_blank" rel="noopener noreferrer"><h2>Personal Development</h2></a>
            </div>
          </div>
          <div className="feature">
            <div className="feature-box">
            <a href="https://www.youtube.com/playlist?list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW" target="_blank" rel="noopener noreferrer"><img
              src={js}
              alt="Hero"
              className="hero-img"
            /></a>
              
             <a href="https://www.youtube.com/playlist?list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW" target="_blank" rel="noopener noreferrer"><h2>Javascript</h2></a>
            </div>
          </div>
        </section>

        

      </div>
  );
};

export default Home;
