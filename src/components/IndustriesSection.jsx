import React from 'react';
import '../css/industries.css';

// Import icons
import energyIcon from '../assets/icons/energy-icon.svg';
import automotiveIcon from '../assets/icons/automotive-icon.svg';
import agricultureIcon from '../assets/icons/agriculture-icon.svg';
import securityIcon from '../assets/icons/security-icon.svg';

const industries = [
    {
        title: 'Energy',
        description: 'Supplying reliable energy solutions to power industries and communities.',
        icon: energyIcon
    },
    {
        title: 'Automotive',
        description: 'Providing high-quality automobile products and services to keep you moving.',
        icon: automotiveIcon
    },
    {
        title: 'Agriculture',
        description: 'Supporting agricultural productivity with essential products and services.',
        icon: agricultureIcon
    },
    {
        title: 'Security',
        description: 'Delivering advanced security solutions to protect people and assets.',
        icon: securityIcon
    }
];

const IndustriesSection = () => {
    return (
        <section className="industries">
            <h2 className="industries-title">Industries We Serve</h2>
            <div className="industries-grid">
                {industries.map((industry, index) => (
                    <div key={index} className="industry-card">
                        <div className="industry-icon">
                            <img src={industry.icon} alt={`${industry.title} Icon`} />
                        </div>
                        <h3 className="industry-title">{industry.title}</h3>
                        <p className="industry-description">{industry.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IndustriesSection;
