import React, { useState } from 'react';
import { FiSettings, FiLock, FiUser, FiBell, FiMail, FiKey } from 'react-icons/fi';
import './Profile.css';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const studentName = 'Thabo Tshwane';
  const studentId = '21547843';
  const studentEmail = 'tt21547843@studentmail.biust.ac.bw';

  const getInitials = (name: string) => {
    const names = name.split(' ');
    return names.map((n) => n[0]).join('');
  };

  const getRandomColor = () => {
    const colors = ['#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password changed successfully!');
  };

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <div className="user-card">
          <div className="avatar-container">
            <div
              className="user-avatar"
              style={{ backgroundColor: getRandomColor() }}
            >
              {getInitials(studentName)}
            </div>
          </div>
          <h2 className="username">{studentName}</h2>
          <p className="user-email">{studentEmail}</p>
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
              Account Information
            </h2>
            <div className="info-group">
              <label>Full Name</label>
              <p className="info-text">{studentName}</p>
            </div>
            <div className="info-group">
              <label>Student ID</label>
              <p className="info-text">{studentId}</p>
            </div>
            <div className="info-group">
              <label>Email</label>
              <p className="info-text">{studentEmail}</p>
            </div>

            <h2 className="section-title">
              <FiLock className="section-icon" />
              Change Password
            </h2>
            <form onSubmit={handleChangePassword}>
              <div className="form-group">
                <label>Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Change Password
              </button>
            </form>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;