import React, { useState } from 'react';
import { Home, MessageCircle, FileText, User, Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isReportsOpen, setIsReportsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleReports = (e: React.MouseEvent): void => {
    e.preventDefault(); // Prevent navigation
    setIsReportsOpen(!isReportsOpen);
  };

  const closeReports = (): void => {
    setIsReportsOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/src/assets/logos/maintainme.png" alt="Logo" />
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeReports}>
              <Home className="nav-icon" />
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/chats" className="nav-link" onClick={closeReports}>
              <MessageCircle className="nav-icon" />
              <span>Chats</span>
            </Link>
          </li>
          <li
            className="nav-item dropdown"
            onMouseEnter={() => setIsReportsOpen(true)}
            onMouseLeave={() => setIsReportsOpen(false)}
          >
            <div className="nav-link" onClick={toggleReports}>
              <FileText className="nav-icon" />
              <span>Reports</span>
              <ChevronDown className="dropdown-icon" />
            </div>
            {isReportsOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/reports/open" onClick={closeReports}>
                    Open
                  </Link>
                </li>
                <li>
                  <Link to="/reports/closed" onClick={closeReports}>
                    Closed
                  </Link>
                </li>
                <li>
                  <Link to="/reports/in-progress" onClick={closeReports}>
                    In Progress
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link" onClick={closeReports}>
              <User className="nav-icon" />
              <span>Profile</span>
            </Link>
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