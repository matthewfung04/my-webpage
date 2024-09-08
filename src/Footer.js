import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer" id="contact"> 
      <div className="footer-content">
        <p>Email: <a href="mailto:matthew.fung@example.com">matthewfung9001@gmail.com</a></p>
        <p>Vancouver, British Columbia, Canada</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/matthewfung04/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/matthewfung04" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/matthewfung04" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <p>Copyright © 2024 Matthew Fung</p>
      </div>
    </footer>
  );
}

export default Footer;
