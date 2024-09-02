import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection';
import ServicesSection from '../components/ServicesSection';
import IndustriesSection from '../components/IndustriesSection';
import SustainabilitySection from '../components/SustainabilitySection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import CTASection from '../components/CTASection';

const Home = () => {
    return (
        <div className="content-wrapper">
            <section className="content-section">
                <HeroSection />
            </section>
            <section className="content-section">
                <AboutUsSection />
            </section>
            <section className="content-section">
                <ServicesSection />
            </section>
            <section className="content-section">
                <IndustriesSection />
            </section>
            <section className="content-section">
                <SustainabilitySection />
            </section>
            <section className="content-section">
                <ProjectsSection />
            </section>
            <section className="content-section">
                <TestimonialsSection />
            </section>
            <section className="content-section">
                <BlogSection />
            </section>
            <section className="content-section">
                <CTASection />
            </section>
        </div>
    );
};

export default Home;
