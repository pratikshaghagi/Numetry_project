import React, { useState } from 'react';
import './pages.css'; // Ensure you have appropriate styling
import paint from './img/paint.jpg'
import sing from './img/sing.jpg'
import cricket from './img/cricket.jpg'
import dance from './img/dance.jpg'
import stock from './img/stock.jpg'
import art from './img/art.jpg'

const HobbySection = () => {
  const [hobbies, setHobbies] = useState([
    { name: 'Painting', image: paint, joined: false },
    { name: 'Singing', image: sing, joined: false },
    { name: 'Art and Craft', image: art, joined: false },
    { name: 'Dancing', image: dance, joined: false },
    { name: 'Trading', image: stock, joined: false },
    { name: 'Cricket', image: cricket, joined: false },
  ]);

  const toggleJoin = (index) => {
    const newHobbies = [...hobbies];
    newHobbies[index].joined = !newHobbies[index].joined;
    setHobbies(newHobbies);
  };

  return (
    <div className="hobby-section-container">
      <h1>Hobby Activities</h1>
      <div className="hobby-cards">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <img src={hobby.image} alt={hobby.name} className="hobby-image" />
            <h2>{hobby.name}</h2>
            <button onClick={() => toggleJoin(index)}>
              {hobby.joined ? 'Leave' : 'Join'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HobbySection;
