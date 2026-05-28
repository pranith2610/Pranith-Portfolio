<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mail, Send, MapPin, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { Github, LinkedIn as Linkedin } from './Icons';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.user_name.trim()) return "Name is required";
    if (!formData.user_email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) return "Invalid email address";
    if (!formData.message.trim()) return "Message is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      toast.error(error, {
        style: {
          background: '#16161d',
          color: '#fff',
          border: '1px solid var(--glass-border)',
        }
      });
      return;
    }

    setIsSending(true);

    try {
      const result = await emailjs.sendForm(
        personalInfo.emailjs.serviceId,
        personalInfo.emailjs.templateId,
        formRef.current,
        personalInfo.emailjs.publicKey
      );

      if (result.text === 'OK') {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#7c3aed', '#0ea5e9', '#d946ef']
        });
        
        toast.success('Message sent successfully!', {
          duration: 5000,
          icon: <CheckCircle2 className="text-green-500" />,
          style: {
            background: '#16161d',
            color: '#fff',
            border: '1px solid var(--glass-border)',
          }
        });
        setFormData({ user_name: '', user_email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again.', {
        icon: <XCircle className="text-red-500" />,
        style: {
          background: '#16161d',
          color: '#fff',
          border: '1px solid var(--glass-border)',
        }
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="container">
      <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
      
      <div className="contact-grid">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Let's collaborate!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </motion.p>
          
          <div className="contact-details">
            <motion.div 
              className="contact-item"
              whileHover={{ x: 5 }}
            >
              <div className="contact-icon"><Mail size={20} /></div>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-item"
              whileHover={{ x: 5 }}
            >
              <div className="contact-icon"><Linkedin size={20} /></div>
              <div>
                <h4>LinkedIn</h4>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">Pranith Kumar</a>
              </div>
            </motion.div>

            <motion.div 
              className="contact-item"
              whileHover={{ x: 5 }}
            >
              <div className="contact-icon"><MapPin size={20} /></div>
              <div>
                <h4>Location</h4>
                <p>{personalInfo.location}</p>
              </div>
            </motion.div>
          </div>

          <div className="social-links">
            <motion.a 
              whileHover={{ y: -5, scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              href="https://github.com/pranith2610" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon github"
            >
              <Github />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon linkedin"
            >
              <Linkedin />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              href={`mailto:${personalInfo.email}`} 
              className="social-icon email"
            >
              <Mail />
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-container glass-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <motion.div 
              className="form-group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label className="form-label">Name</label>
              <input 
                type="text" 
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Your Name" 
                required 
              />
            </motion.div>
            <motion.div 
              className="form-group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="form-label">Email</label>
              <input 
                type="email" 
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Your Email" 
                required 
              />
            </motion.div>
            <motion.div 
              className="form-group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="form-label">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" 
                rows="5" 
                required
              ></textarea>
            </motion.div>
            <motion.button 
              type="submit" 
              className={`glow-btn ${isSending ? 'sending' : ''}`}
              disabled={isSending}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: isSending ? 1 : 1.02 }}
              whileTap={{ scale: isSending ? 1 : 0.98 }}
            >
              <AnimatePresence mode="wait">
                {isSending ? (
                  <motion.span 
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-center"
                  >
                    Sending... <Loader2 size={18} className="animate-spin ml-10" />
                  </motion.span>
                ) : (
                  <motion.span 
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-center"
                  >
                    Send Message <Send size={18} className="ml-10" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
=======
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title text-gradient animate-fade-in">Let's Connect</h2>
                <div className="contact-content">
                    <div className="contact-info glass-panel animate-fade-in delay-100">
                        <h3>Get In Touch</h3>
                        <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-label">Email:</span>
                                <a href="mailto:pranithkumar0306@gmail.com" className="contact-link">pranithkumar0306@gmail.com</a>
                            </div>
                            <div className="contact-item">
                                <span className="contact-label">Location:</span>
                                <span>Coimbatore</span>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-btn">GitHub</a>
                            <a href="#" className="social-btn">LinkedIn</a>
                            <a href="#" className="social-btn">Twitter</a>
                        </div>
                    </div>

                    <form className="contact-form glass-panel animate-fade-in delay-200" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
>>>>>>> 0d33b0d39998157bab154852986aa598ca461c07
};

export default Contact;
