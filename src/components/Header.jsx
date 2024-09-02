import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/">Adequate Oil and Gas</Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/industries">Industries</Link></li>
                    <li><Link to="/sustainability">Sustainability</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
