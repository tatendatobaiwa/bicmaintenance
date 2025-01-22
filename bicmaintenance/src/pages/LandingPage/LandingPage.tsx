import React from 'react';
import './LandingPage.css';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleSignInClick = () => {
    navigate('/signin');
  };

  return (
    <div className="landing-page">
      {/* Logo Placeholder */}
      <div className="logo-container">
        <img
          src="/src/assets/logos/maintainme.png"
          alt="MaintainMe Logo"
          className="logo"
        />
      </div>

      {/* Main Content */}
      <div className="landing-content">
        <div className="landing-buttons">
          <button className="landing-button sign-up" onClick={handleSignUpClick}>
            Sign Up
          </button>
          <button className="landing-button sign-in" onClick={handleSignInClick}>
            Sign In
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="landing-footer">
      <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="icon" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="icon" />
          </a>
        </div>
        <p className="rights-reserved">
          &copy; {new Date().getFullYear()} MaintainMe. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;