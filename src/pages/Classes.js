import React, { useState, useEffect } from 'react';
import './pages.css'; // Import CSS for styling

import java from './java.jpg';
import python from './python.jpg';
import digi from './digi.jpg';
import js from './js.jpg';
import cpp from './cpp.jpg';
import next from './next.jpg';



const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Mock API call to fetch class data
    const fetchClasses = async () => {
      // Simulate API response delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock class data
      const mockClasses = [
        { id: 1, name: 'Java', chname:'CodingHub', instructor: 'Rahul', schedule: 'Mon/Wed/Fri 9:00 AM - 10:30 AM' },
        { id: 2, name: 'Python',chname:'CodeWithMe', instructor: 'Pratik', schedule: 'Tue/Thu 11:00 AM - 12:30 PM' },
        { id: 3, name: 'React', chname:'Learn', instructor: 'Alice', schedule: 'Mon/Wed 1:00 PM - 2:30 PM' },
        { id: 3, name: 'C++',chname:'Programer.io', instructor: 'Nita', schedule: 'Mon/Wed 1:00 PM - 2:30 PM' },
        { id: 3, name: 'DSA', chname:'CodeHelp',instructor: 'Sima', schedule: 'Mon/Wed 1:00 PM - 2:30 PM' }

        // Add more classes as needed
      ];

      // Set the fetched classes to state
      setClasses(mockClasses);
    };

    fetchClasses();
  }, []);

  return (
    <div className="classes-container">
      <div id="cls"><h1>Classes</h1></div>
      <section className="feature-section">
        
          <div className="feature">    
            <div className="feature-box">   
            <div className="checkbox">
    <input type="checkbox" id="check" name="check"  />Add to list
  </div>  
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
            <div className="checkbox">
    <input type="checkbox" id="check" name="check"  />Add to list
  </div>
            <a href="https://www.youtube.com/playlist?list=PLuJZH5pDX4GKrPyVImrii6mZ3kdwAOLvv" target="_blank" rel="noopener noreferrer"> <img
              src={python}
              alt="Hero"
              className="hero-img"
            /></a>
             
             <a href="https://www.youtube.com/playlist?list=PLuJZH5pDX4GKrPyVImrii6mZ3kdwAOLvv" target="_blank" rel="noopener noreferrer"><h2>Python Full Stack</h2></a>
            </div>
          </div>
         
        </section>

        <section className="feature-section">
          
          <div className="feature">
            <div className="feature-box">
            <div className="checkbox">
    <input type="checkbox" id="check" name="check"  />Add to list
  </div>
            <a href="https://www.youtube.com/playlist?list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW" target="_blank" rel="noopener noreferrer"><img
              src={js}
              alt="Hero"
              className="hero-img"
            /></a>
              
             <a href="https://www.youtube.com/playlist?list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW" target="_blank" rel="noopener noreferrer"><h2>Javascript</h2></a>
            </div>
          </div>
          <div className="feature">
            <div className="feature-box">
            <div className="checkbox">
    <input type="checkbox" id="check" name="check"  />Add to list
  </div>
            <a href="https://www.youtube.com/playlist?list=PLUujFthL-cXkaqSWdcR4C7BtYjED12eLq" target="_blank" rel="noopener noreferrer"><img
              src={digi}
              alt="Hero"
              className="hero-img"
            /></a>
              
            <a href="https://www.youtube.com/playlist?list=PLUujFthL-cXkaqSWdcR4C7BtYjED12eLq" target="_blank" rel="noopener noreferrer"><h2>Digital Marketing</h2></a>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="feature">
            <div className="feature-box">
            <div className="checkbox">
    <input type="checkbox" id="check" name="check"  />Add to list
  </div>
            <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" target="_blank" rel="noopener noreferrer"><img
              src={cpp}
              alt="Hero"
              className="hero-img"
            /></a>
              
            <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" target="_blank" rel="noopener noreferrer"><h2>CPP</h2></a>
            </div>
          </div>
          
          <div className="feature">
            <div className="feature-box">
            <div className="checkbox">
    <input type="checkbox" id="check" name="check"  />Add to list
  </div>
            <a href="https://www.youtube.com/playlist?list=PLwGdqUZWnOp2rDbpfKAeUi9f8qZMS7_cv" target="_blank" rel="noopener noreferrer"><img
              src={next}
              alt="Hero"
              className="hero-img"
            /></a>
              
             <a href="https://www.youtube.com/playlist?list=PLwGdqUZWnOp2rDbpfKAeUi9f8qZMS7_cv" target="_blank" rel="noopener noreferrer"><h2>Next.js</h2></a>
            </div>
          </div>
        </section>
     
    </div>    
  );
};

export default Classes;
