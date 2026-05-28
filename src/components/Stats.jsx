import React from 'react';
import { motion } from 'framer-motion';
import { Code, Award, Coffee } from 'lucide-react';
import { Github } from './Icons';
import './Stats.css';

const Stats = () => {
  const stats = [
    { label: 'GitHub Repos', value: '10+', icon: <Github size={20} /> },
    { label: 'Projects Built', value: '5+', icon: <Code size={20} /> },
    { label: 'Hackathons', value: '4', icon: <Award size={20} /> },
    { label: 'Coffee Consumed', value: '∞', icon: <Coffee size={20} /> },
  ];

  return (
    <div className="container">
      <div className="stats-container glass-card">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            className="stat-card-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
