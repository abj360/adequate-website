import React from 'react';
import teamImg from '../assets/images/team.jpg';
import facilityImg from '../assets/images/facility.jpg';
import '../css/about.css';

const AboutUsSection = () => {
    return (
        <section className="about-us">
            <h2 className="about-title">About Us</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>We are a leading provider of energy solutions, committed to innovation and sustainability. Our mission is to deliver high-quality products and services while maintaining a strong focus on environmental stewardship.</p>
                    <a href="/about" className="cta-button">Read More About Us</a>
                </div>
                <div className="about-images">
                    <img src={teamImg} alt="Our Team" />
                    <img src={facilityImg} alt="Our Facility" />
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
