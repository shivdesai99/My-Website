import React from 'react';
import './Introduction.css';
import ProfessionalPhoto from './assets/ProfessionalPhoto.jpg';

const Introduction = () => {
  const handleScroll = () => {
    document.getElementById('next-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="introduction">
      <div className="photo-container">
        <img src={ProfessionalPhoto} alt="My Photo" className="profile-photo" />
      </div>
      <div className="blurb-container">
        <div className="speech-bubble">
          <p>
            Hi, I'm <strong>Shiv Desai</strong>. I'm a junior software engineer and a senior at Emory University getting a B.S. in Computer Science. Thank you for visiting my webpage and I would love for you to get me to know me better!
          </p>
        </div>
        <button 
            className="see-more-button" 
            onClick={handleScroll}
            aria-label="Scroll to the next section"
            >
            See More
        </button>
      </div>
    </div>
  );
};

export default Introduction;