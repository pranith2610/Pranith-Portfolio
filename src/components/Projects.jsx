<<<<<<< HEAD
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
=======
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce application with secure payments, user authentication, and an admin dashboard.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            link: '#'
        },
        {
            title: 'ACIDS',
            description: 'An AI-powered cybersecurity in industrial defense system.',
            tech: ['AI / ML', 'Python', 'Cybersecurity'],
            link: '#'
        },
        {
            title: 'Dimple',
            description: 'A mental health and wellbeing project aimed at providing accessible psychological support and tracking.',
            tech: ['Mental Health', 'React', 'Wellbeing'],
            link: '#'
        },
        {
            title: 'SkillSwap',
            description: 'A peer-to-peer skill sharing platform that connects users looking to exchange knowledge and learn new skills.',
            tech: ['React', 'Node.js', 'WebRTC'],
            link: '#'
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title text-gradient animate-fade-in">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className={`project-card glass-panel animate-fade-in delay-${(index + 1) * 100}`}>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="project-footer">
                                <a href={project.link} className="project-link">
                                    View Project <span className="arrow">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
>>>>>>> 0d33b0d39998157bab154852986aa598ca461c07
};

export default Projects;
