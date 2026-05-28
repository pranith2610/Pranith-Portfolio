import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { ExternalLink, Folder } from 'lucide-react';
import { Github } from './Icons';
import './Projects.css';

const Projects = () => {
  return (
    <div className="container">
      <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
      
      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div 
            key={project.id}
            className="glass-card project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="project-header">
              <Folder className="folder-icon" size={40} />
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer"><Github size={20} /></a>
                <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={20} /></a>
              </div>
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            
            <div className="project-glow" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
