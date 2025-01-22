import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const blobImages = [
    '/src/assets/blobs/blob1.png',
    '/src/assets/blobs/blob2.png',
    '/src/assets/blobs/blob1.png',
    '/src/assets/blobs/blob2.png',
  ];

  const handleBackClick = () => {
    navigate('/');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="signin-page">
      {/* Background blobs */}
      <div className="background-blobs">
        {blobImages.map((blob, index) => (
          <img
            key={index}
            src={blob}
            alt={`Decorative blob ${index + 1}`}
            className={`blob blob-${index + 1}`}
          />
        ))}
      </div>

      {/* Back Button */}
      <button className="back-button" onClick={handleBackClick}>
        Go Back
      </button>
        {/* Logo Placeholder */}
        <div className="logo-container">
          <img
          src="/src/assets/logos/maintainme.png"
          alt="MaintainMe Logo"
          className="logoin"
        />
      </div>
      {/* SignIn Content */}
      <div className="signin-content">
        <h1>Sign In</h1>
        <form>
          <input type="text" placeholder="Student ID" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>
        <p className="switch-page-text">
          Don't have an account?{' '}
          <span className="switch-page-link" onClick={handleSignUpClick}>
            Sign Up
          </span>
        </p>
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

export default SignIn;