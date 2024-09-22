import React from 'react';
import './AboutMe.css';
import ProfessionalPhoto from './../assets/ProfessionalPhoto.jpg';

import FaGithub from './../assets/github.png';
import FaLinkedin from './../assets/linkedin.png';
import FaGmail from './../assets/gmail.png';
import FaResume from './../assets/resume.png';
import resume from './../assets/myresume.pdf';

const AboutMe = () => {
    const handleIconClick = (url) => {
        window.open(url, '_blank');
    };

    const handleResumeClick = () => {
        window.open(resume, '_blank');
    };

    const handleGmailClick = () => {
        window.location.href = 'mailto:shiv.desai2@emory.edu';
    };

    return (
        <div className="about-me-container">
            <h1>About Me</h1>
            <div className="content-wrapper">
                <div className="profile-section">
                    <div className="photo-container">
                        <img src={ProfessionalPhoto} alt="My Photo" className="profile-photo" />
                    </div>
                    <div className="social-icons">
                        <img 
                            src={FaGithub} 
                            alt="GitHub" 
                            className="icon" 
                            onClick={() => handleIconClick('https://github.com/shivdesai99')} 
                            title="GitHub" 
                            aria-label="GitHub Profile"
                        />
                        <img 
                            src={FaLinkedin} 
                            alt="LinkedIn" 
                            className="icon" 
                            onClick={() => handleIconClick('https://www.linkedin.com/in/shivdesai02/')} 
                            title="LinkedIn" 
                            aria-label="LinkedIn Profile"
                        />
                        <img 
                            src={FaGmail} 
                            alt="Gmail" 
                            className="icon" 
                            onClick={handleGmailClick} 
                            title="Email" 
                            aria-label="Send Email"
                        />
                        <img 
                            src={FaResume} 
                            alt="Resume" 
                            className="icon" 
                            onClick={handleResumeClick} 
                            title="Resume" 
                            aria-label="Download Resume"
                        />
                    </div>
                </div>
                <div className="info-section">
                    <div className="info-boxes">
                        <div className="info-box">
                            <h2>Background</h2>
                            <p>
                                Hi! I am a senior at <a href="https://www.emory.edu/home/index.html"> Emory University</a>, studying Computer Science, and set to graduate in May 2025. I'm from West Windsor, NJ, and I am looking at New Grad SWE roles for 2025!
                            </p>
                        </div>
                        <div className="info-box">
                            <h2>Hobbies</h2>
                            <p>
                                Outside of academics, I enjoy working out, going on runs, making food, and watching How I Met Your Mother. I love to play soccer and golf, and love to watch Man United and the NFL whenever there are games to watch.
                            </p>
                        </div>
                        <div className="info-box">
                            <h2>Goals</h2>
                            <p>
                                My short-term goal is to excel in full-stack development, while my long-term goal is to become a tech leader and contribute to projects that positively impact society.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
