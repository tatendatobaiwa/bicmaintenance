import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a team of developers building awesome web apps with React, Vite, and Express.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/chats">Chats</a></li>
            <li><a href="/reports">Reports</a></li>
            <li><a href="/profile">Profile</a></li>
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