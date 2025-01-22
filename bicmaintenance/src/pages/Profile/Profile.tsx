import React, { useState } from 'react';
import { FiSettings, FiLock, FiUser, FiBell, FiMail, FiKey } from 'react-icons/fi';
import './Profile.css';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <div className="user-card">
          <div className="avatar-container">
            <img 
              src="https://via.placeholder.com/150" 
              alt="User Avatar" 
              className="user-avatar"
            />
            <button className="avatar-edit">
              <FiSettings className="edit-icon" />
            </button>
          </div>
          <h2 className="username">John Developer</h2>
          <p className="user-email">john@maintainme.com</p>
        </div>

        <nav className="profile-nav">
          <button 
            className={`nav-item ${activeTab === 'account' ? 'active' : ''}`}
            onClick={() => setActiveTab('account')}
          >
            <FiUser className="nav-icon" />
            Account
          </button>
          <button 
            className={`nav-item ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <FiLock className="nav-icon" />
            Security
          </button>
          <button 
            className={`nav-item ${activeTab === 'preferences' ? 'active' : ''}`}
            onClick={() => setActiveTab('preferences')}
          >
            <FiBell className="nav-icon" />
            Preferences
          </button>
        </nav>
      </div>

      <div className="profile-content">
        {activeTab === 'account' && (
          <div className="settings-section">
            <h2 className="section-title">
              <FiUser className="section-icon" />
              Account Settings
            </h2>
            <div className="form-group">
              <label>Username</label>
              <input 
                type="text" 
                defaultValue="John Developer" 
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                defaultValue="john@maintainme.com" 
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea 
                className="form-textarea"
                defaultValue="Full-stack developer passionate about building maintainable systems"
              />
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="settings-section">
            <h2 className="section-title">
              <FiLock className="section-icon" />
              Security Settings
            </h2>
            <div className="security-card">
              <div className="security-info">
                <FiKey className="security-icon" />
                <div>
                  <h3>Two-Factor Authentication</h3>
                  <p>Add an extra layer of security to your account</p>
                </div>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={twoFactorEnabled}
                  onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>
            
            <div className="security-card">
              <div className="security-info">
                <FiMail className="security-icon" />
                <div>
                  <h3>Connected Devices</h3>
                  <p>3 devices currently active</p>
                </div>
              </div>
              <button className="manage-button">
                Manage
              </button>
            </div>
          </div>
        )}

        {activeTab === 'preferences' && (
          <div className="settings-section">
            <h2 className="section-title">
              <FiBell className="section-icon" />
              Notification Preferences
            </h2>
            <div className="preference-item">
              <div className="preference-info">
                <h3>Email Notifications</h3>
                <p>Receive important updates via email</p>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={notificationsEnabled}
                  onChange={(e) => setNotificationsEnabled(e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>
            
            <div className="preference-item">
              <div className="preference-info">
                <h3>Theme Preference</h3>
                <p>Choose between light and dark themes</p>
              </div>
              <div className="theme-switcher">
                <button className="theme-option light">Light</button>
                <button className="theme-option dark">Dark</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;