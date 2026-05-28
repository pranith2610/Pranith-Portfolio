import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { User, BookOpen, GraduationCap, MapPin } from 'lucide-react';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="container">
      <motion.div 
        className="about-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="about-text" variants={itemVariants}>
          <h2 className="section-title" style={{ textAlign: 'left', marginLeft: 0 }}>
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="about-description">
            {personalInfo.about}
          </p>
          
          <div className="about-info-grid">
            <div className="info-item">
              <GraduationCap className="info-icon" />
              <div>
                <h4>Education</h4>
                <p>B.Tech in Information Technology</p>
                <p className="sub-detail">VSB College, CGPA: 7.56</p>
              </div>
            </div>
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <h4>Location</h4>
                <p>{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="about-stats" variants={itemVariants}>
          <div className="glass-card stat-card">
            <h3>Current Learning</h3>
            <ul className="learning-list">
              {personalInfo.currentLearning.map((item, i) => (
                <li key={i}>
                  <BookOpen size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="stats-experience glass-card">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Hackathons</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
