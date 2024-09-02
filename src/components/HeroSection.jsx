import React from 'react';
import '../css/hero.css';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-headline">Leading the Way in Energy Solutions</h1>
                <p className="hero-subheadline">Innovative and sustainable energy solutions for a better future.</p>
                <a href="/services" className="cta-button">Get Started</a>
            </div>
        </section>
    );
};

export default HeroSection;
