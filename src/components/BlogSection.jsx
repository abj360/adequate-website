import React from 'react';
import '../css/blog.css';

// Import images
import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/blog2.jpg';
import blog3 from '../assets/images/blog3.jpg';

const blogPosts = [
    {
        title: 'The Future of Oil and Gas',
        excerpt: 'Exploring the latest trends and technologies in the oil and gas industry.',
        date: 'August 15, 2024',
        thumbnail: blog1, // Use imported image
        link: '/blog/the-future-of-oil-and-gas'
    },
    {
        title: 'Sustainable Energy Solutions',
        excerpt: 'How sustainable practices are transforming the energy sector.',
        date: 'August 8, 2024',
        thumbnail: blog2, // Use imported image
        link: '/blog/sustainable-energy-solutions'
    },
    {
        title: 'Innovations in Oil Extraction',
        excerpt: 'New methods and technologies in oil extraction and their impact.',
        date: 'July 30, 2024',
        thumbnail: blog3, // Use imported image
        link: '/blog/innovations-in-oil-extraction'
    }
];

const BlogSection = () => {
    return (
        <section className="blog">
            <h2 className="blog-title">Latest Blog Posts</h2>
            <div className="blog-grid">
                {blogPosts.map((post, index) => (
                    <div key={index} className="blog-card">
                        <img src={post.thumbnail} alt={`${post.title} thumbnail`} className="blog-thumbnail" />
                        <h3 className="blog-title">{post.title}</h3>
                        <p className="blog-excerpt">{post.excerpt}</p>
                        <p className="blog-date">{post.date}</p>
                        <a href={post.link} className="blog-cta">Read More</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
