import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-policy-content">
        <h1>Privacy Policy</h1>
        <p>
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
        </p>

        <section>
          <h2>Information We Collect</h2>
          <p>
            We collect information such as your name, email address, and usage data to provide and improve our services.
          </p>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>
            Your information is used to personalize your experience, process transactions, and send periodic emails.
          </p>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services to process your data. These services are obligated to protect your information and use it only for the purposes we specify.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information at any time. Contact us if you have any questions or requests.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;