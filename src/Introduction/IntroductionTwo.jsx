// src/components/IntroductionTwo.js
import React, { useState, useEffect } from 'react';
import './IntroductionTwo.css';
import Arrow from './../assets/white-arrow.png';
import BackgroundVideo from './../assets/backgroundwave.mp4';

const IntroductionTwo = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100); // Initial typing speed in ms

  const words = ['Welcome To My Portfolio', 'Shiv Desai'];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, displayedText.length - 1)
        : currentWord.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      // Adjust typing speed for deleting vs typing
      setTypingSpeed(isDeleting ? 50 : 100); // Faster typing and deleting

      // If typing is complete, start deleting after a longer pause
      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 3000); // 3-second pause
      }
      // If deleting is complete, move to the next word
      else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, typingSpeed, currentWordIndex, words]);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about-me');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="introductiontwo">
      {/* Background Video */}
      <video
        className="background-video"
        src={BackgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="content">
        <h1 className="typed-text">
          {displayedText}
        </h1>
      </div>

      {/* Arrow Icon */}
      <div className="scroll-indicator" onClick={scrollToNextSection} aria-label="Scroll to About Me section">
        <img src={Arrow} alt="Down Arrow" className="down-arrow" />
      </div>
    </div>
  );
};

export default IntroductionTwo;