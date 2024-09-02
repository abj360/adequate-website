// src/pages/Contact.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import SocialMedia from '../components/SocialMedia';
import '../css/contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <Header />
            <main>
                <ContactInfo />
                <ContactForm />
                <SocialMedia />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
