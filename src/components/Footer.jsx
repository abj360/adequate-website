import React from 'react';
import '../css/footer.css';

// Import icons
import facebookIcon from '../assets/icons/facebook.svg';
import twitterIcon from '../assets/icons/twitter.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Adequate Oil and Gas Limited Logo" />
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/industries">Industries</a></li>
                        <li><a href="/sustainability">Sustainability</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <p>Address: 123 Oil Road, City, Country</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Email: info@adequateoilgas.com</p>
                </div>
                <div className="footer-social">
                    <a href="https://facebook.com/adequateoil" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <img src={facebookIcon} alt="Facebook" />
                    </a>
                    <a href="https://twitter.com/adequateoil" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <img src={twitterIcon} alt="Twitter" />
                    </a>
                    <a href="https://linkedin.com/company/adequateoil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Adequate Oil and Gas Limited. All rights reserved.</p>
                <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
            </div>
        </footer>
    );
};

export default Footer;
