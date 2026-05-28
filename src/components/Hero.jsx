import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = personalInfo.tagline;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Available for Opportunities
          </motion.span>
          
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
          </h1>
          
          <div className="hero-tagline-container">
            <h2 className="hero-tagline">
              {text}<span className="cursor">|</span>
            </h2>
          </div>
          
          <p className="hero-description">
            Building the future with code and intelligence. Specializing in high-performance web applications and AI-driven solutions.
          </p>
          
          <div className="hero-btns">
            <motion.a 
              href="#projects" 
              className="glow-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work <ArrowRight size={18} style={{marginLeft: '8px'}} />
            </motion.a>
            
            <motion.a 
              href="#" 
              className="outline-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} style={{marginRight: '8px'}} /> Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="visual-orb"></div>
          <div className="visual-grid"></div>
          {/* Add a floating card for style */}
          <motion.div 
            className="floating-card glass-card"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="card-body">
              <code>
                <span className="code-purple">const</span> <span className="code-blue">developer</span> = &#123;<br/>
                &nbsp;&nbsp;name: <span className="code-green">"{personalInfo.name}"</span>,<br/>
                &nbsp;&nbsp;status: <span className="code-green">"Coding..."</span><br/>
                &#125;;
              </code>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={30} />
      </motion.div>
    </div>
  );
};

export default Hero;
