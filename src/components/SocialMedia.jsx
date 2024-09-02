// src/components/SocialMedia.jsx
import React from 'react';
import '../css/socialMedia.css';

// Import social media icons
import facebookIcon from '../assets/icons/facebook.svg';
import twitterIcon from '../assets/icons/twitter.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';

const SocialMedia = () => {
    return (
        <div className="social-media">
            <h2>Follow Us</h2>
            <a href="https://facebook.com/adequateoil" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://twitter.com/adequateoil" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="X" />
            </a>
            <a href="https://linkedin.com/company/adequateoil" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
            </a>
        </div>
    );
};

export default SocialMedia;
