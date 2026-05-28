import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { Github } from './Icons';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home" className="logo-text">
            PK<span>.</span>
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="nav-links desktop">
          {navLinks.map((link, i) => (
            <motion.li 
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <a href={link.href}>{link.name}</a>
            </motion.li>
          ))}
        </ul>

        <div className="nav-actions desktop">
          <motion.a 
            href="https://github.com/pranith2610" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ y: -3, color: 'var(--accent-primary)' }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a 
            href="#" 
            className="resume-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul className="mobile-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
                </li>
              ))}
              <li>
                <a href="#" className="mobile-resume-btn">Download Resume</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
