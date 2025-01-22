import React from 'react';
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
        ← Back to Landing
      </button>

      {/* SignIn Content */}
      <div className="signin-content">
        <h1>Sign In</h1>
        <form>
          <input type="text" placeholder="Student ID" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;