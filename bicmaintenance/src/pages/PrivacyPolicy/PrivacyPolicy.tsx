import React, { useEffect, useState } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Show/hide scroll-to-top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="privacy-policy">
      <div className="privacy-policy-container">
        <div className="policy-header">
          <h1>Privacy Policy</h1>
          <p className="policy-subhead">
            Effective Date: January 22, 2025
          </p>
        </div>

        <div className="policy-content">
          <section className="policy-section fade-in">
            <h2 className="section-title">
              <span className="title-accent">01</span>
              Introduction
            </h2>
            <p className="section-text">
              Your privacy is fundamental to our service. This policy outlines 
              our commitment to protecting your personal information with 
              enterprise-grade security measures.
            </p>
          </section>

          <section className="policy-section fade-in">
            <h2 className="section-title">
              <span className="title-accent">02</span>
              Information Collection
            </h2>
            <p className="section-text">
              We collect only essential data:
            </p>
            <ul className="feature-list">
              <li>Account registration details</li>
              <li>Service usage metrics</li>
              <li>Device and network information</li>
            </ul>
          </section>

          <section className="policy-section fade-in">
            <h2 className="section-title">
              <span className="title-accent">03</span>
              Data Utilization
            </h2>
            <div className="grid-layout">
              <div className="grid-item">
                <h3>Personalization</h3>
                <p>Tailored experience based on usage patterns</p>
              </div>
              <div className="grid-item">
                <h3>Security</h3>
                <p>Real-time threat detection and prevention</p>
              </div>
              <div className="grid-item">
                <h3>Communication</h3>
                <p>Service-related notifications and updates</p>
              </div>
            </div>
          </section>

          <section className="policy-section fade-in">
            <h2 className="section-title">
              <span className="title-accent">04</span>
              Your Control
            </h2>
            <p className="section-text">
              Manage your data through our Privacy Dashboard:
            </p>
            <div className="control-options">
              <button className="data-control">
                Download Data Archive
              </button>
              <button className="data-control">
                Request Deletion
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Scroll-to-top button */}
      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default PrivacyPolicy;