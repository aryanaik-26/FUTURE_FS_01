import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', category: 'Frontend', level: 'Advanced' },
    { name: 'CSS', category: 'Frontend', level: 'Advanced' },
    { name: 'JavaScript', category: 'Frontend', level: 'Intermediate' },
    { name: 'React basics', category: 'Frontend', level: 'Intermediate' },
    { name: 'DSA Basics', category: 'Computer Science', level: 'Intermediate' },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card glass">
              <div className="skill-icon">
                {/* Generative icon styling based on name */}
                <div className="icon-circle">{skill.name.charAt(0)}</div>
              </div>
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
