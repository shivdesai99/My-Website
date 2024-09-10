import React, { useEffect, useState } from 'react';
import './Introduction.css';
import ProfessionalPhoto from './assets/ProfessionalPhoto.jpg';

const Introduction = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="introduction">
      <div className="photo-container">
        <img src={ProfessionalPhoto} alt="My Photo" className="profile-photo" />
      </div>
      <div className="blurb-container">
        <div className={`speech-bubble ${animate ? 'falling' : ''}`}>
          <p>
            Hi, I'm <strong>Shiv Desai</strong>. Thank you for visiting my webpage!
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