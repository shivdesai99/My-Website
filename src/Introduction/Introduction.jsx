import { useState, useEffect } from 'react';
import './Introduction.css';
import Arrow from './../assets/white-arrow.png';
import BackgroundVideo from './../assets/backgroundwave.mp4';

const Introduction = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const words = ['Welcome...', 'Shiv Desai'];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, displayedText.length - 1)
        : currentWord.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 3500);
      }
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
        <h1 className="typed-text">
          {displayedText}
        </h1>
      </div>

      <div className="scroll-indicator" onClick={scrollToNextSection} aria-label="Scroll to About Me section">
        <img src={Arrow} alt="Down Arrow" className="down-arrow" />
      </div>
    </div>
  );
};

export default Introduction;