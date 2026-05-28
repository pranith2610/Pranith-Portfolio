import React from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications } from '../data/portfolioData';
import { Award, ShieldCheck, Trophy, Star } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  return (
    <div className="container">
      <div className="achievements-section-wrapper">
        {/* Achievements */}
        <div className="ach-column">
          <h2 className="section-title" style={{ textAlign: 'left', marginLeft: 0 }}>
            <Award className="title-icon" /> Achievements
          </h2>
          <div className="ach-list">
            {achievements.map((item, i) => (
              <motion.div 
                key={i}
                className="ach-item glass-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Trophy className="ach-icon" size={20} />
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="ach-column">
          <h2 className="section-title" style={{ textAlign: 'left', marginLeft: 0 }}>
            <ShieldCheck className="title-icon" /> Certifications
          </h2>
          <div className="ach-list">
            {certifications.map((cert, i) => (
              <motion.div 
                key={i}
                className="ach-item glass-card secondary"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <span>{cert.issuer}</span>
                </div>
                <Star className="ach-icon" size={20} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
