import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            const homeSectionHeight = homeSection.getBoundingClientRect().height;
            
            if (window.scrollY > homeSectionHeight - 20) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
            <ul className="menu-items">
                <li><a href="#home">Home</a></li>
                <li><a href="#about-me">About Me</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;