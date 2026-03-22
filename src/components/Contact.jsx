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
};

export default Contact;
