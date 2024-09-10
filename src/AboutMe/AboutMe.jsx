import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <h1>About Me</h1>
            <div className="info-boxes">
                <div className="info-box">
                    <h2>Background</h2>
                    <p>
                    I am a senior at Emory University pursuing a B.S. in Computer Science. After my freshman year, I transferred from Indiana University’s Kelley School of Business to Emory to follow my passion for coding. I have maintained a competitive GPA and consistently made the Dean’s List, all while catching up on credits to graduate on time, as I began the degree in my sophomore year
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
                        My short-term goal is to excel in full-stack development, 
                        while my long-term goal is to become a tech leader and 
                        contribute to projects that positively impact society.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;