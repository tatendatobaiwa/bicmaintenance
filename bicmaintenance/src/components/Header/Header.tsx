import React, { useState } from 'react';
import { Home, MessageCircle, FileText, User, Menu, ChevronDown } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isReportsOpen, setIsReportsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleReports = (): void => {
    setIsReportsOpen(!isReportsOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/src/assets/logos/maintainme.png" alt="Logo" /> 
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <Home className="nav-icon" />
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/chats" className="nav-link">
              <MessageCircle className="nav-icon" />
              <span>Chats</span>
            </a>
          </li>
          <li className="nav-item dropdown" onClick={toggleReports}>
            <a href="/reports" className="nav-link">
              <FileText className="nav-icon" />
              <span>Reports</span>
              <ChevronDown className="dropdown-icon" />
            </a>
            {isReportsOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="/reports/open">Open</a>
                </li>
                <li>
                  <a href="/reports/closed">Closed</a>
                </li>
                <li>
                  <a href="/reports/in-progress">In Progress</a>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a href="/profile" className="nav-link">
              <User className="nav-icon" />
              <span>Profile</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="burger" onClick={toggleMenu}>
        <Menu className="burger-icon" />
      </div>
    </header>
  );
};

export default Header;