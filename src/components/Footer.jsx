<<<<<<< HEAD
import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="made-with">
            Built with <Heart size={14} className="heart-icon" /> and Antigravity
          </p>
        </div>
      </div>
    </footer>
  );
=======
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo text-gradient">PK.</div>
                    <p className="footer-text">Built with React, Vanilla CSS, and passion.</p>
                    <div className="footer-copyright">
                        &copy; {new Date().getFullYear()} Pranith Kumar. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
>>>>>>> 0d33b0d39998157bab154852986aa598ca461c07
};

export default Footer;
