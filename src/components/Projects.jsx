import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'LifeArc',
      description: 'A comprehensive web application to manage life tasks, notes, and habits in one place. Built with modern web technologies focusing on a clean UI and smooth user experience.',
      techStack: ['React', 'CSS', 'JavaScript'],
      github: 'https://github.com/aryanaik-26/LifeArc',
      live: '#',
    },
    {
      title: 'project-c-',
      description: 'A dedicated project exploring advanced concepts, focusing on efficient algorithms and structured development. Showcases practical application of DSA basics.',
      techStack: ['C++', 'DSA', 'Algorithms'],
      github: 'https://github.com/aryanaik-26/project-c-',
      live: '#',
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass">
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                      <GithubIcon size={20} />
                    </a>
                    {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <ul className="project-tech-list">
                  {project.techStack.map((tech, techIndex) => (
                    <li key={techIndex} className="tech-item">{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
