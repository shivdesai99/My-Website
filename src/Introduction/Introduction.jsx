import React, { useEffect, useState } from 'react';
import './Introduction.css';
import ProfessionalPhoto from './../assets/ProfessionalPhoto.jpg';
import Arrow from './../assets/down-arrow.png';

const Introduction = () => {

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about-me');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="introduction">
      <div className="photo-container">
        <img src={ProfessionalPhoto} alt="My Photo" className="profile-photo" />
      </div>
      <div className="blurb-container">
        <div className="speech-bubble">
          <p>
            Hi, I'm <strong>Shiv Desai</strong>. Thank you for visiting my webpage!
          </p>
        </div>
      </div>

      <div className="scroll-indicator" onClick={scrollToNextSection}>
        <img src={Arrow} alt="Down Arrow" className="down-arrow" />
      </div>
    </div>
  );
};

export default Introduction;