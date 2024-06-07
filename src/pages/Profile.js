import React, { useState, useEffect } from 'react';
import './pages.css'; // Import CSS for styling
import profile from './profile.jpg';


const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Mock API call
    const fetchUserData = async () => {
      // Simulate an API call
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          resolve({
            name: 'Pratiksha Ghagi',
            email: 'prati@gmail.com',
            contact: '87956230631',
            city: 'Nagpur',
            bio: 'I am a student.',
            avatar: 'https://via.placeholder.com/150',
            Education: ['Bachelors of Technology'],
            subscribedChannels: ['CodingHub', 'CodeTogether', 'LearnAI'],
            favoriteContents: ['Educational', 'Learning', 'Music']
          });
        }, 1000)
      );
      setUser(response);
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-header">
        <img src={profile} alt={`${user.name}'s avatar`} className="profile-avatar" />
        <h2>{user.name}</h2>
        <p className="profile-bio">{user.bio}</p>
      </div>
      <div className="profile-details">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Contact:</strong> {user.contact}</p>
        <p><strong>City:</strong> {user.city}</p>
        
        <h2>Education</h2>
        <ul>
          {user.Education.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        
        <h2>Subscribed Channels</h2>
        <ul>
          {user.subscribedChannels.map((channel, index) => (
            <li key={index}>{channel}</li>
          ))}
        </ul>
        
        <h2>Favorite Contents</h2>
        <ul>
          {user.favoriteContents.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
