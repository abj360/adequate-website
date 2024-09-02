import React from 'react';
import '../css/projects.css';

// Import images
import oilRefineryImage from '../assets/images/oil-refinery.jpg';
import gasStationImage from '../assets/images/gas-station.jpg';
import greenEnergyImage from '../assets/images/green-energy.jpg';

const projects = [
    {
        title: 'Oil Refinery Development',
        description: 'Construction and management of a state-of-the-art oil refinery, providing top-quality petroleum products to meet regional demands.',
        image: oilRefineryImage
    },
    {
        title: 'Gas Station Network Expansion',
        description: 'Expanded our gas station network across several states, ensuring accessibility and convenience for customers.',
        image: gasStationImage
    },
    {
        title: 'Sustainable Energy Solutions',
        description: 'Implemented green technologies in our operations, reducing emissions and promoting sustainable energy practices.',
        image: greenEnergyImage
    }
];

const ProjectsSection = () => {
    return (
        <section className="projects">
            <h2 className="projects-title">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
