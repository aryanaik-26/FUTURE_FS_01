import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import profileImage from '../assets/profile.jpg';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container home-container">
        <div className="home-content animate-fade-in">
          <p className="greeting">Hi, my name is</p>
          <h1 className="name">Arya Naik.</h1>
          <h2 className="title">I build things for the web.</h2>
          <p className="intro">
            I'm an aspiring Full Stack Web Developer focused on building clean, 
            responsive, and user-centric web applications.
          </p>
          
          <div className="home-actions">
            <a href="#projects" className="btn">
              View My Work <ArrowRight size={18} />
            </a>
            <div className="social-links">
              <a href="https://github.com/aryanaik-26" target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon size={24} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={24} />
              </a>
              <a href="mailto:aryanaik206@gmail.com" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="home-image-container animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="image-wrapper">
            <img src={profileImage} alt="Arya Naik" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
