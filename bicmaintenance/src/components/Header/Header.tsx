import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MessageCircle, FileText, User, Menu } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuActive, setMenuActive] = useState<boolean>(false);
  const location = useLocation(); // Get the current route

  const toggleMenu = (): void => {
    setMenuActive(!isMenuActive);
  };

  // Function to check if a link is active
  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <header>
      <nav>
        <div className="container">
          <div className="nav-content">
            <div>
              <Link to="/" className="logo">
                <img src="/src/assets/logos/maintainme.png" alt="Logo" />
              </Link>
            </div>
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu className="burger-icon" />
            </button>
            <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  onClick={toggleMenu}
                >
                  <Home className="nav-icon" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/chats"
                  className={`nav-link ${isActive('/chats') ? 'active' : ''}`}
                  onClick={toggleMenu}
                >
                  <MessageCircle className="nav-icon" />
                  <span>Chats</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/reports"
                  className={`nav-link ${isActive('/reports') ? 'active' : ''}`}
                  onClick={toggleMenu}
                >
                  <FileText className="nav-icon" />
                  <span>Reports</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile"
                  className={`nav-link ${isActive('/profile') ? 'active' : ''}`}
                  onClick={toggleMenu}
                >
                  <User className="nav-icon" />
                  <span>Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;