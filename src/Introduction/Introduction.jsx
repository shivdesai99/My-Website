import { useState, useEffect } from 'react';
import './Introduction.css';
import Arrow from './../assets/white-arrow.png';
import BackgroundVideo from './../assets/backgroundstar.mp4';

const words = ['software engineer', 'fitness enthusiast', 'web developer', 'golfer', 'bookworm'];

const Introduction = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, displayedText.length - 1)
        : currentWord.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      let newTypingSpeed = isDeleting ? 50 : 85;

      if (!isDeleting && updatedText === currentWord) {
        newTypingSpeed = 3500;
        setIsDeleting(true);
      } else if (isDeleting && updatedText === '') {
        newTypingSpeed = 500;
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }

      setTypingSpeed(newTypingSpeed);
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, typingSpeed, currentWordIndex]);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about-me');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="introduction">
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

      <div className="content">
        <h1 className="static-name">
          I'm Shiv Desai
        </h1>
        <h2 className="typed-text">
          a <span className="dynamic-text">{displayedText}</span>
        </h2>
      </div>
      <div className="scroll-indicator" onClick={scrollToNextSection} aria-label="Scroll to About Me section">
        <img src={Arrow} alt="Down Arrow" className="down-arrow" />
      </div>
    </div>
  );
};

export default Introduction;