import React from 'react';
import LinkedIn from './assets/linkedin.png';
import Gmail from './assets/gmail.png';
import GitHub from './assets/github.png';
import Resume from './assets/resume.png';
import ResumePDF from './assets/resume.pdf';
import './Navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="menu-items">
                <li><a href="#home">Home</a></li>
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
            <ul className="social-icons">
                <li>
                    <a href="https://www.linkedin.com/in/shivdesai02/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedIn} alt="LinkedIn" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/shivdesai99" target="_blank" rel="noopener noreferrer">
                        <img src={GitHub} alt="GitHub" />
                    </a>
                </li>
                <li>
                    <a href="mailto:shiv.desai2@emory.edu">
                        <img src={Gmail} alt="Gmail" />
                    </a>
                </li>
                <li>
                    <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
                        <img src={Resume} alt="Resume" />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;