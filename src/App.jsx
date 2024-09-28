import Introduction  from './Introduction/Introduction';
import AboutMe from './AboutMe/AboutMe';
import NavBar from './NavBar/NavBar';
import Project from './Projects/Projects';
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
      {/* <section id="projects" style={{ height: '100vh' }}>
        <Project />
      </section> */}
    </div>
  );
};

export default App;