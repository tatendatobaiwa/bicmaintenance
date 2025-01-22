import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/chats">Chats</Link></li>
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-use">Terms of Use</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook className="icon" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <Twitter className="icon" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <Instagram className="icon" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin className="icon" />
            </a>
            <a href="https://github.com" aria-label="GitHub">
              <Github className="icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;