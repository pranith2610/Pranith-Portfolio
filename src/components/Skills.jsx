import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { Code2, Server, Database, Globe, Wrench, UserCheck } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    { title: 'Frontend', icon: <Globe />, skills: skills.frontend },
    { title: 'Backend', icon: <Server />, skills: skills.backend },
    { title: 'Database', icon: <Database />, skills: skills.database },
    { title: 'Languages', icon: <Code2 />, skills: skills.languages },
    { title: 'Tools', icon: <Wrench />, skills: skills.tools },
    { title: 'Soft Skills', icon: <UserCheck />, skills: skills.softSkills },
  ];

  return (
    <div className="container">
      <h2 className="section-title">Technical <span className="text-gradient">Proficiency</span></h2>
      
      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <motion.div 
            key={cat.title}
            className="glass-card skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02, borderColor: 'var(--accent-primary)' }}
          >
            <div className="skill-icon-wrapper">
              {cat.icon}
            </div>
            <h3>{cat.title}</h3>
            <div className="skill-tags">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
