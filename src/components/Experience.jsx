import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="container">
      <h2 className="section-title">Professional <span className="text-gradient">Experience</span></h2>
      
      <div className="experience-timeline">
        {experience.map((exp, i) => (
          <motion.div 
            key={i}
            className="experience-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="experience-dot">
              <Briefcase size={16} />
            </div>
            <div className="glass-card experience-content">
              <div className="exp-header">
                <h3>{exp.role}</h3>
                <span className="exp-duration">{exp.duration}</span>
              </div>
              <h4 className="exp-company">{exp.company}</h4>
              <p className="exp-desc">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
