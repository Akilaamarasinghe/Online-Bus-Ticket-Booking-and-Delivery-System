import React from 'react';

const FeedbackCards = ({ feedbackcard }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '18rem' }}>
      <img src="https://img.freepik.com/free-photo/customer-experience-creative-collage_23-2149371200.jpg?t=st=1713817316~exp=1713820916~hmac=0821a0f13f77aa8b66926cf4f01f5bfe7473a685a765269c8b3eb94df2062e22&w=996" className="card-img-top" alt="Feedback" />
      <div className="card-body">
        <h5 className="card-title">{feedbackcard.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{feedbackcard.type}</h6>
        <p className="card-text">Category: {feedbackcard.category}</p>
        <p className="card-text">Feedback: {feedbackcard.rating}</p>
        <p className="card-text">{feedbackcard.content}</p>
    
        <p className="card-text">Bus Number: {feedbackcard.busNum}</p>
       
      </div>
    </div>
  );
};

export default FeedbackCards;
