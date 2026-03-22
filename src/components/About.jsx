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
};

export default About;
