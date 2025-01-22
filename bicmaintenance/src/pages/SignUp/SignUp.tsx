import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const blobImages = [
    '/src/assets/blobs/blob1.png',
    '/src/assets/blobs/blob2.png',
    '/src/assets/blobs/blob1.png',
    '/src/assets/blobs/blob2.png',
  ];

  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    studentId: '',
    password: '',
    confirmPassword: '',
  });

  const handleBackClick = () => {
    navigate('/');
  };

  const handleSignInClick = () => {
    navigate('/signin');
  };

  const validateStudentId = (id: string): boolean => {
    // Check if the ID is exactly 8 characters long
    if (id.length !== 8) {
      setErrors((prev) => ({
        ...prev,
        studentId: 'Student ID must be exactly 8 characters long.',
      }));
      return false;
    }

    // Check if the first 2 characters are numbers between 11 and 24
    const firstTwoDigits = parseInt(id.substring(0, 2), 10);
    if (isNaN(firstTwoDigits) || firstTwoDigits < 11 || firstTwoDigits > 24) {
      setErrors((prev) => ({
        ...prev,
        studentId: 'The first 2 digits must be between 11 and 24.',
      }));
      return false;
    }

    // Clear the error if validation passes
    setErrors((prev) => ({ ...prev, studentId: '' }));
    return true;
  };

  const validatePassword = (password: string): boolean => {
    // Check if the password contains at least one number, one letter, and one special character
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrors((prev) => ({
        ...prev,
        password:
          'Password must contain at least one letter, one number, and one special character.',
      }));
      return false;
    }

    // Clear the error if validation passes
    setErrors((prev) => ({ ...prev, password: '' }));
    return true;
  };

  const validateConfirmPassword = (confirmPassword: string): boolean => {
    // Check if the confirm password matches the password
    if (confirmPassword !== password) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: 'Passwords do not match.',
      }));
      return false;
    }

    // Clear the error if validation passes
    setErrors((prev) => ({ ...prev, confirmPassword: '' }));
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const isStudentIdValid = validateStudentId(studentId);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);

    // If all fields are valid, proceed with form submission
    if (isStudentIdValid && isPasswordValid && isConfirmPasswordValid) {
      // Handle form submission (e.g., send data to the server)
      console.log('Form submitted successfully!');
      // Navigate to another page or show a success message
    }
  };

  return (
    <div className="signup-page">
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
          className="logoup"
        />
      </div>

      {/* SignUp Content */}
      <div className="signup-content">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          {/* Student ID Input */}
          <input
            type="text"
            placeholder="Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            onBlur={() => validateStudentId(studentId)}
          />
          {errors.studentId && <p className="error-message">{errors.studentId}</p>}

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => validatePassword(password)}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}

          {/* Confirm Password Input */}
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={() => validateConfirmPassword(confirmPassword)}
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword}</p>
          )}

          {/* Submit Button */}
          <button type="submit">Sign Up</button>
        </form>

        {/* Switch Page Text */}
        <p className="switch-page-text">
          Already have an account?{' '}
          <span className="switch-page-link" onClick={handleSignInClick}>
            Sign In
          </span>
        </p>
      </div>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="social-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="icon" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="icon" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="icon" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
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

export default SignUp;