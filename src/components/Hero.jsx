<<<<<<< HEAD
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
=======
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content animate-fade-in">
                    <h2 className="hero-subtitle text-gradient">Hello, World! I'm</h2>
                    <h1 className="hero-title">Pranith Kumar</h1>
                    <h3 className="hero-role">Full Stack Developer</h3>
                    <p className="hero-description delay-100">
                        Specializing in the MERN stack, Python, HTML, and CSS to craft unique, dynamic web experiences.
                        I build digital products that combine beautiful design with robust engineering.
                    </p>
                    <div className="hero-cta delay-200">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-outline">Let's Connect</a>
                    </div>
                </div>

                <div className="hero-visual animate-fade-in delay-300">
                    <div className="visual-circle circle-1"></div>
                    <div className="visual-circle circle-2"></div>
                    <div className="visual-shape glass-panel">
                        <div className="code-snippet">
                            <span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'} <br />
                            &nbsp;&nbsp;name: <span className="code-string">"Pranith"</span>,<br />
                            &nbsp;&nbsp;stack: [<span className="code-string">"MERN"</span>, <span className="code-string">"Python"</span>],<br />
                            &nbsp;&nbsp;unique: <span className="code-keyword">true</span><br />
                            {'}'};
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
>>>>>>> 0d33b0d39998157bab154852986aa598ca461c07
};

export default Hero;
