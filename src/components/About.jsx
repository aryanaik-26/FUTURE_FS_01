import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text glass">
            <p>
              I am a passionate Computer Science student and aspiring Full Stack Web Developer 
              focused on building clean, responsive, and user-centric web applications.
            </p>
            <p>
              With a strong foundation in HTML, CSS, and JavaScript, I actively leverage 
              modern tools and AI-assisted development to accelerate learning and deliver 
              efficient solutions.
            </p>
            <p>
              I enjoy transforming ideas into functional digital experiences and continuously 
              challenge myself by working on real-world projects. Currently, I am expanding 
              my skills in full stack development while aiming to create scalable and 
              impactful web solutions.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-card glass">
              <h3>Student</h3>
              <p>Computer Science</p>
            </div>
            <div className="stat-card glass">
              <h3>Developer</h3>
              <p>Full Stack Focus</p>
            </div>
            <div className="stat-card glass">
              <h3>Learner</h3>
              <p>Continuous Growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
