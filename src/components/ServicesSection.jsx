import React from 'react';
import '../css/services.css';

// Import icons
import oilIcon from '../assets/icons/oil.svg';
import gasIcon from '../assets/icons/gas.svg';
import dieselIcon from '../assets/icons/diesel.svg';

const services = [
    {
        title: 'Oil Supply',
        description: 'Comprehensive solutions for sourcing and distributing oil products.',
        icon: oilIcon
    },
    {
        title: 'Gas Distribution',
        description: 'Efficient and reliable gas distribution services.',
        icon: gasIcon
    },
    {
        title: 'Diesel Supply',
        description: 'Quality diesel products for various applications.',
        icon: dieselIcon
    }
];

const ServicesSection = () => {
    return (
        <section className="services">
            <h2 className="services-title">Our Services</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <img src={service.icon} alt={`${service.title} icon`} className="service-icon" />
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                        <a href={`/services/${service.title.replace(/\s+/g, '-').toLowerCase()}`} className="service-cta">Learn More</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
