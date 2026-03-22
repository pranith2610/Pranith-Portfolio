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
};

export default Hero;
