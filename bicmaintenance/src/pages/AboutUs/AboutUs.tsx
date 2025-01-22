import React, { useEffect, useState } from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
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
    <div className="about-us">
      <div className="about-us-container">
        <div className="about-header">
          <h1>About Us</h1>
          <p className="about-subhead">
            Building tools to simplify student life.
          </p>
        </div>

        <div className="about-content">
          <section className="about-section fade-in">
            <h2 className="section-title">
              <span className="title-accent">01</span>
              Our Mission
            </h2>
            <p className="section-text">
              Our mission is to provide a seamless maintenance experience for students and staff, ensuring that every interaction with our app is intuitive, efficient, and stress-free.
            </p>
          </section>

          <section className="about-section fade-in">
            <h2 className="section-title">
              <span className="title-accent">02</span>
              Our Team
            </h2>
            <p className="section-text">
              We are a passionate team of developers, designers, and problem-solvers dedicated to creating tools that make student life easier. Meet the team behind the app:
            </p>
            <ul className="team-list">
              <li>John Doe - Lead Developer</li>
              <li>Jane Smith - UX Designer</li>
              <li>Alex Johnson - Product Manager</li>
              <li>Emily Brown - Data Analyst</li>
            </ul>
          </section>

          <section className="about-section fade-in">
            <h2 className="section-title">
              <span className="title-accent">03</span>
              Our Values
            </h2>
            <p className="section-text">
              We are committed to:
            </p>
            <ul className="feature-list">
              <li>Innovation: Constantly improving our tools to meet your needs.</li>
              <li>Transparency: Keeping you informed about how your data is used.</li>
              <li>Community: Building solutions that bring students and staff together.</li>
            </ul>
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

export default AboutUs;