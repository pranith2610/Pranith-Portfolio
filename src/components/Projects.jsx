import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce application with secure payments, user authentication, and an admin dashboard.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            link: '#'
        },
        {
            title: 'ACIDS',
            description: 'An AI-powered cybersecurity in industrial defense system.',
            tech: ['AI / ML', 'Python', 'Cybersecurity'],
            link: '#'
        },
        {
            title: 'Dimple',
            description: 'A mental health and wellbeing project aimed at providing accessible psychological support and tracking.',
            tech: ['Mental Health', 'React', 'Wellbeing'],
            link: '#'
        },
        {
            title: 'SkillSwap',
            description: 'A peer-to-peer skill sharing platform that connects users looking to exchange knowledge and learn new skills.',
            tech: ['React', 'Node.js', 'WebRTC'],
            link: '#'
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title text-gradient animate-fade-in">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className={`project-card glass-panel animate-fade-in delay-${(index + 1) * 100}`}>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="project-footer">
                                <a href={project.link} className="project-link">
                                    View Project <span className="arrow">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
