import React, { useState, useEffect } from 'react';
import '../css/hero.css';

// Import images
import heroBackground1 from '../assets/images/hero-background1.jpg';
import heroBackground2 from '../assets/images/hero-background2.jpg';
import heroBackground3 from '../assets/images/hero-background3.jpg';

const HeroSection = () => {
    const [backgroundImage, setBackgroundImage] = useState(heroBackground1);

    const images = [heroBackground1, heroBackground2, heroBackground3];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackgroundImage(prevImage => {
                const currentIndex = images.indexOf(prevImage);
                const nextIndex = (currentIndex + 1) % images.length;
                return images[nextIndex];
            });
        }, 10000); // Change image every 10 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-content">
                <h1 className="hero-headline">Leading the Way in Energy Solutions</h1>
                <p className="hero-subheadline">Innovative and sustainable energy solutions for a better future.</p>
                <a href="/services" className="cta-button">Get Started</a>
            </div>
        </section>
    );
};

export default HeroSection;
