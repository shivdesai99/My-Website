// App.jsx
import React from 'react';
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import NavBar from './NavBar';
import './global.css';


const App = () => {
  return (
    <div>
      <NavBar />
      <section id="home">
        <Introduction />
      </section>

      <section id="about-me" style={{ height: '100vh' }}>
        <h1>About Me</h1>
        <AboutMe />
      </section>

      <section id="projects" style={{ height: '100vh' }}>
        <h1>Projects</h1>
        {/* Content for Projects section */}
      </section>
    </div>
  );
};

export default App;