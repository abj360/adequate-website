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
        <div>
            <HeroSection />
            <AboutUsSection />
            <ServicesSection />
            <IndustriesSection />
            <SustainabilitySection />
            <ProjectsSection />
            <TestimonialsSection />
            <BlogSection />
            <CTASection />
        </div>
    );
};

export default Home;
