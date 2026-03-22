import './Skills.css';

const Skills = () => {
    const skills = [
        { category: 'Frontend', items: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS', 'JavaScript (ES6+)'] },
        { category: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'REST APIs'] },
        { category: 'Database', items: ['MongoDB', 'Mongoose', 'SQL', 'PostgreSQL'] },
        { category: 'Tools & Other', items: ['Git/GitHub', 'VS Code', 'Postman', 'Vite', 'Figma'] }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title text-gradient animate-fade-in">Technical Arsenal</h2>
                <div className="skills-grid">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className={`skill-category glass-panel animate-fade-in delay-${(index + 1) * 100}`}>
                            <h3 className="category-title">{skillGroup.category}</h3>
                            <div className="skill-items">
                                {skillGroup.items.map((item, i) => (
                                    <span key={i} className="skill-tag">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
