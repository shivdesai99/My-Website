import React from 'react';
import Introduction from './Introduction/Introduction';
import AboutMe from './AboutMe/AboutMe';
import NavBar from './NavBar/NavBar';
import './global.css';


const App = () => {
  return (
    <div>
      <NavBar />
      <section id="home">
        <Introduction />
      </section>

      <section id="about-me" style={{ height: '100vh' }}>
        <AboutMe />
      </section>
      <section id="experience" style={{ height: '100vh' }}>
        {/* Content for Experience section */}
      </section>
      <section id="projects" style={{ height: '100vh' }}>
        {/* Content for Projects section */}
      </section>
    </div>
  );
};

export default App;