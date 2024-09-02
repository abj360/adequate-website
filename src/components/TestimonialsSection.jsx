import React from 'react';
import '../css/testimonials.css';

// Import logo images
import energySolutionsLogo from '../assets/images/energy-solutions-logo.jpg';
import fuelMastersLogo from '../assets/images/fuel-masters-logo.jpg';

const testimonials = [
    {
        quote: "Adequate Oil and Gas has been a game-changer for our operations. Their service is top-notch!",
        name: "John Doe",
        title: "CEO",
        company: "Energy Solutions Inc.",
        logo: energySolutionsLogo
    },
    {
        quote: "We rely on Adequate Oil and Gas for all our fuel needs. Their reliability and quality are unmatched.",
        name: "Jane Smith",
        title: "Operations Manager",
        company: "Fuel Masters",
        logo: fuelMastersLogo
    }
];

const TestimonialsSection = () => {
    return (
        <section className="testimonials">
            <h2 className="testimonials-title">What Our Clients Say</h2>
            <div className="testimonials-carousel">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <p className="testimonial-quote">"{testimonial.quote}"</p>
                        <div className="testimonial-author">
                            <img src={testimonial.logo} alt={`${testimonial.company} Logo`} className="author-logo" />
                            <div className="author-info">
                                <p className="author-name">{testimonial.name}</p>
                                <p className="author-title">{testimonial.title} at {testimonial.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="/testimonials" className="cta-button">See More Testimonials</a>
        </section>
    );
};

export default TestimonialsSection;
