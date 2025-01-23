import React from 'react';
import { FiAlertTriangle, FiMessageSquare, FiList, FiHelpCircle, FiMail } from 'react-icons/fi';
import './Home.css';

const blobImages = [
  '/src/assets/blobs/blob1.png',
  '/src/assets/blobs/blob2.png',
  '/src/assets/blobs/blob1.png',
  '/src/assets/blobs/blob2.png'
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Background blobs */}
      <div className="backgrounds-blobs">
        {blobImages.map((blob, index) => (
          <img
            key={index}
            src={blob}
            alt={`Decorative blob ${index + 1}`}
            className={`blob blob-${index + 1}`}
          />
        ))}
      </div>
      {/* Logo Placeholder */}
      <div className="logo-container">
        <img
          src="/src/assets/logos/maintainme.png"
          alt="MaintainMe Logo"
          className="logo"
        />
      </div>
      {/* Hero Section */}
      <div className="hero-section">
        <p>Efficiently manage and resolve maintenance issues with ease.</p>
      </div>

      {/* Quick Links Section */}
      <div className="quick-links">
        <div className="link-card" onClick={() => console.log('Navigate to Report Fault')}>
          <FiAlertTriangle className="link-icon" />
          <h3>Report a Fault</h3>
          <p>Submit a new maintenance request.</p>
        </div>
        <div className="link-card" onClick={() => console.log('Navigate to Fault Status')}>
          <FiList className="link-icon" />
          <h3>View Fault Status</h3>
          <p>Track the progress of your requests.</p>
        </div>
        <div className="link-card" onClick={() => console.log('Navigate to Chat')}>
          <FiMessageSquare className="link-icon" />
          <h3>Chat with Maintenance</h3>
          <p>Communicate directly with the maintenance team.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;