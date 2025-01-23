import React, { useEffect, useState } from 'react';
import './TermsOfUse.css';

const TermsOfUse: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="terms-of-use">
      <div className="terms-of-use-container">
        <div className="terms-header">
          <h1>Terms of Use</h1>
          <p className="terms-subhead">
            Effective Date: January 22, 2025
          </p>
        </div>

        <div className="terms-content">
          <section className="terms-section fade-in">
            <h2 className="section-title">
              <span className="title-accent">01</span>
              Acceptance of Terms
            </h2>
            <p className="section-text">
              By accessing or using our app, you agree to be bound by these Terms of Use. If you do not agree to these terms, you may not use the app.
            </p>
          </section>

          <section className="terms-section fade-in">
            <h2 className="section-title">
              <span className="title-accent">02</span>
              User Responsibilities
            </h2>
            <p className="section-text">
              You are responsible for:
            </p>
            <ul className="feature-list">
              <li>Maintaining the confidentiality of your account credentials.</li>
              <li>All activities that occur under your account.</li>
              <li>Complying with all applicable laws and regulations.</li>
            </ul>
          </section>

          <section className="terms-section fade-in">
            <h2 className="section-title">
              <span className="title-accent">03</span>
              Prohibited Activities
            </h2>
            <p className="section-text">
              You may not:
            </p>
            <ul className="feature-list">
              <li>Use the app for any illegal or unauthorized purpose.</li>
              <li>Attempt to gain unauthorized access to the app or its systems.</li>
              <li>Interfere with the proper functioning of the app.</li>
            </ul>
          </section>

          <section className="terms-section fade-in">
            <h2 className="section-title">
              <span className="title-accent">04</span>
              Termination
            </h2>
            <p className="section-text">
              We reserve the right to terminate or suspend your access to the app at any time, without notice, for any reason, including violation of these Terms of Use.
            </p>
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

export default TermsOfUse;