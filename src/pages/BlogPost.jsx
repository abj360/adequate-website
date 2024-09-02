import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
    const { id } = useParams();

    // Fetch blog post based on the ID or use static data
    return (
        <div>
            <h1>Blog Post {id}</h1>
            {/* Render blog post content here */}
        </div>
    );
};

export default BlogPost;
