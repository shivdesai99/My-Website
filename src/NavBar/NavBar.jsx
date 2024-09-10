import React from 'react';
import './Navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="menu-items">
                <li><a href="#home">Home</a></li>
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;