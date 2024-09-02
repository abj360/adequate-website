import React from 'react';
import Header from '../components/Header';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

const Blog = () => {
    return (
        <div className="content-wrapper">
            <section className="content-section">
                <BlogSection />
            </section>
        </div>
    );
};

export default Blog;
