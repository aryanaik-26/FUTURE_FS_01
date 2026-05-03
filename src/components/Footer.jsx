import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Arya.</h2>
            <p>Building functional and beautiful digital experiences.</p>
          </div>
          
          <div className="footer-socials">
            <a href="https://github.com/aryanaik-26" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="mailto:aryanaik206@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Arya Naik. All rights reserved.</p>
          <p className="credit">Designed & Built with React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
