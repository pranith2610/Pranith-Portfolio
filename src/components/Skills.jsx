<<<<<<< HEAD
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
=======
import './Skills.css';

const Skills = () => {
    const skills = [
        { category: 'Frontend', items: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS', 'JavaScript (ES6+)'] },
        { category: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'REST APIs'] },
        { category: 'Database', items: ['MongoDB', 'Mongoose', 'SQL', 'PostgreSQL'] },
        { category: 'Tools & Other', items: ['Git/GitHub', 'VS Code', 'Postman', 'Vite', 'Figma'] }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title text-gradient animate-fade-in">Technical Arsenal</h2>
                <div className="skills-grid">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className={`skill-category glass-panel animate-fade-in delay-${(index + 1) * 100}`}>
                            <h3 className="category-title">{skillGroup.category}</h3>
                            <div className="skill-items">
                                {skillGroup.items.map((item, i) => (
                                    <span key={i} className="skill-tag">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
>>>>>>> 0d33b0d39998157bab154852986aa598ca461c07
};

export default Skills;
