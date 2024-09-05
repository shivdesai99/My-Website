// App.jsx
import React from 'react';
import Introduction from './Introduction';
import InterviewPrep from './InterviewPrep';
import './Navbar.css';
import './global.css';

const App = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

      <section id="home">
        <Introduction />
      </section>

      <section id="about-me" style={{ height: '100vh' }}>
        <h1>About Me</h1>
        <InterviewPrep />
        {/* Content for About Me section */}
      </section>

      <section id="projects" style={{ height: '100vh' }}>
        <h1>Projects</h1>
        {/* Content for Projects section */}
      </section>
    </div>
  );
};

export default App;