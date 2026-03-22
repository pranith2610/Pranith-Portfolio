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
            title: 'AI Dashboard Analyzer',
            description: 'Data visualization dashboard for AI models using Python backend and React frontend.',
            tech: ['Python', 'FastAPI', 'React', 'Chart.js'],
            link: '#'
        },
        {
            title: 'Real-time Chat App',
            description: 'Instant messaging application with WebSockets, private rooms, and read receipts.',
            tech: ['MERN', 'Socket.io', 'Tailwind'],
            link: '#'
        },
        {
            title: 'Portfolio Generator',
            description: 'A tool for developers to generate stunning portfolio websites dynamically.',
            tech: ['React', 'CSS3', 'Vite'],
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
