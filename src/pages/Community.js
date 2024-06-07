import React, { useState } from 'react';
import './pages.css';

const Community = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [newReviewer, setNewReviewer] = useState('');
  const [newRating, setNewRating] = useState(1);
  const [filterRating, setFilterRating] = useState(0);

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleReviewerChange = (e) => {
    setNewReviewer(e.target.value);
  };

  const handleRatingChange = (e) => {
    setNewRating(Number(e.target.value));
  };

  const handleFilterChange = (e) => {
    setFilterRating(Number(e.target.value));
  };

  const submitReview = () => {
    if (newReview && newReviewer) {
      const review = {
        reviewer: newReviewer,
        text: newReview,
        rating: newRating,
      };
      setReviews([...reviews, review]);
      setNewReview('');
      setNewReviewer('');
      setNewRating(1);
    }
  };

  return (
    <div className="community-container">
      <h1>Community Reviews</h1>
      <div className="review-form">
        <input
          type="text"
          placeholder="Your Name"
          value={newReviewer}
          onChange={handleReviewerChange}
        />
        <input
          type="text"
          placeholder="Tutor Name"
          value={newReviewer}
          onChange={handleReviewerChange}
        />
        <input
          type="text"
          placeholder="Sunject Name"
          value={newReviewer}
          onChange={handleReviewerChange}
        />
        <textarea
          value={newReview}
          onChange={handleReviewChange}
          placeholder="Write your review here..."
        />
        <label>
          Rating:
          <select value={newRating} onChange={handleRatingChange}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
       
      </div>
      <div className="filter-section">
        <label>
          Filter by Rating:
          <select value={filterRating} onChange={handleFilterChange}>
            <option value={0}>All</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="reviews-list">
        {reviews
          .filter((review) => (filterRating === 0 ? true : review.rating === filterRating))
          .map((review, index) => (
            <div key={index} className="review">
              <strong>{review.reviewer}</strong> ({review.rating} stars)
              <p>{review.text}</p>
            </div>
          ))}
           <button onClick={submitReview}>Submit Review</button>
      </div>
     
    </div>
  );
};

export default Community;
