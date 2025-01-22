import React from 'react';
import './LandingPage.css';
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
      <div className="landing-content">
        <h1 className="landing-title">Welcome to Our Platform</h1>
        <p className="landing-subtitle">Join us to get started or sign in to continue your journey.</p>
        <div className="landing-buttons">
          <button className="landing-button sign-up" onClick={handleSignUpClick}>
            Sign Up
          </button>
          <button className="landing-button sign-in" onClick={handleSignInClick}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;