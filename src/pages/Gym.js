import React, { useState } from 'react';
import './pages.css'; // Ensure you have appropriate styling
import gym1 from './img/gym1.jpg'; 
import gym from './img/gym4.jpg'
import gym2 from './img/gym2.jpg'; 
import gym5 from './img/gym5.jpg';
import gym6 from './img/gym6.jpg'
import gym7 from './img/gym7.jpg'

const GymSection = () => {
  const [activities, setActivities] = useState([
    { name: 'Workout', image: gym1, booked: false },
    { name: 'Gym4U', image: gym, booked: false },
    { name: 'GymStation', image: gym2, booked: false },
    { name: 'HealthyLife', image: gym5, booked: false },
    { name: 'Gymnatics', image: gym6, booked: false },
    { name: 'Stafit', image: gym7, booked: false },
  ]);

  const toggleBooking = (index) => {
    const newActivities = [...activities];
    newActivities[index].booked = !newActivities[index].booked;
    setActivities(newActivities);
  };

  return (
    <div className="gym-section-container">
      <h1>Gym Classes</h1>
      <div className="gym-cards">
        {activities.map((activity, index) => (
          <div key={index} className="gym-card">
            <img src={activity.image} alt={activity.name} className="gym-image" />
            <h2>{activity.name}</h2>
            <button onClick={() => toggleBooking(index)}>
              {activity.booked ? 'Cancel' : 'Book'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GymSection;
