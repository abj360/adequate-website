import React from 'react';
import '../css/sustainability.css';

// Import sustainability image
import sustainabilityImage from '../assets/images/sustainability.jpg';

const SustainabilitySection = () => {
    return (
        <section className="sustainability">
            <div className="sustainability-content">
                <h2 className="sustainability-title">Our Commitment to Sustainability</h2>
                <p className="sustainability-description">
                    At Adequate Oil and Gas, we are dedicated to minimizing our environmental impact while providing reliable energy solutions. Our commitment to sustainability is at the core of our operations, driving us to adopt eco-friendly practices and invest in green technologies.
                </p>
                <p className="sustainability-description">
                    We continually strive to reduce our carbon footprint, enhance energy efficiency, and support community-based environmental initiatives. Our goal is to balance economic growth with ecological responsibility, ensuring a sustainable future for generations to come.
                </p>
            </div>
            <div className="sustainability-image">
                <img src={sustainabilityImage} alt="Sustainability at Adequate Oil and Gas" />
            </div>
        </section>
    );
};

export default SustainabilitySection;
