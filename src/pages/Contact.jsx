import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import SocialMedia from '../components/SocialMedia';
import '../css/contact.css';

const Contact = () => {
    return (
        <div className="content-wrapper">
            <main className="content-section">
                <ContactInfo />
                <ContactForm />
                <SocialMedia />
            </main>
        </div>
    );
};

export default Contact;
