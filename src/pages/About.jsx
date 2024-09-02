import React from 'react';
import Header from '../components/Header';
import AboutUsSection from '../components/AboutUsSection';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="content-wrapper">
            <section className="content-section">
                <AboutUsSection />
            </section>
        </div>
    );
};

export default About;
