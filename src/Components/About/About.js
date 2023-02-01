import React from 'react';
import { useLocation } from 'react-router-dom';
import './About.css';
const About = () => {
    const location = useLocation()
    return (
        <div>
            <div className='about-banner'>
                <h1>hellow</h1>
            </div>
        </div>
    );
};

export default About;