import React, { useState } from 'react';
import './pages.css';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState('');
  const [newUser, setNewUser] = useState('');
  const [category, setCategory] = useState('class');
  const [filterCategory, setFilterCategory] = useState('all');

  const handleFeedbackChange = (e) => {
    setNewFeedback(e.target.value);
  };

  const handleUserChange = (e) => {
    setNewUser(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const submitFeedback = () => {
    if (newFeedback && newUser) {
      const feedback = {
        user: newUser,
        text: newFeedback,
        category: category,
      };
      setFeedbacks([...feedbacks, feedback]);
      setNewFeedback('');
      setNewUser('');
      setCategory('class');
    }
  };

  return (
    <div className="feedback-container">
      <h1>Feedback</h1>
      <input
        type="text"
        placeholder="Your Name"
        value={newUser}
        onChange={handleUserChange}
      />
      <textarea
        value={newFeedback}
        onChange={handleFeedbackChange}
        placeholder="Provide your feedback here..."
      />
      <label>
        Category:
        <select value={category} onChange={handleCategoryChange}>
          <option value="class">Class</option>
          <option value="tutor">Tutor</option>
        </select>
      </label>
      <button onClick={submitFeedback}>Submit Feedback</button>
      <div className="filter-section">
        
      </div>
      <div className="submitted-feedback">
        {feedbacks
          .filter((feedback) =>
            filterCategory === 'all' ? true : feedback.category === filterCategory
          )
          .map((feedback, index) => (
            <div key={index} className="feedback-item">
              <strong>{feedback.user}</strong> ({feedback.category})
              <p>{feedback.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Feedback;
