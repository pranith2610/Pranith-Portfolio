<<<<<<< HEAD
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
=======
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title text-gradient animate-fade-in">About Me</h2>
                <div className="about-content">
                    <div className="about-text glass-panel animate-fade-in delay-100">
                        <p>
                            Hi there! I'm Pranith Kumar, an enthusiastic Full Stack Developer with a deep passion for building
                            scalable, efficient, and beautifully designed web applications.
                        </p>
                        <p>
                            My journey in tech has equipped me with a robust understanding of both front-end and back-end architectures.
                            From crafting responsive user interfaces with HTML/CSS and React, to engineering resilient APIs with
                            Python and the MERN stack, I love every aspect of the development lifecycle.
                        </p>
                        <p>
                            When I'm not coding, I'm constantly learning about new technologies and finding creative ways
                            to solve complex problems. I have learned AI fluency with Anthropic and have a strong passion for innovation—I have participated in 5 hackathons and won 3rd prize in one of them! Let's build something amazing together!
                        </p>
                    </div>
                    <div className="about-stats animate-fade-in delay-200">
                        <div className="stat-card glass-panel">
                            <h3 className="stat-number text-gradient">5</h3>
                            <p className="stat-label">Hackathons</p>
                        </div>
                        <div className="stat-card glass-panel">
                            <h3 className="stat-number text-gradient">3rd</h3>
                            <p className="stat-label">Prize Won</p>
                        </div>
                        <div className="stat-card glass-panel">
                            <h3 className="stat-number text-gradient">100%</h3>
                            <p className="stat-label">Passion</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
>>>>>>> 0d33b0d39998157bab154852986aa598ca461c07
};

export default About;
