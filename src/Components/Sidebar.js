// src/components/Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faHeart, faStar, faHistory, faBook, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={"./images/clogob.png"} alt="Logo" className="logo" />
      </div>
      <div className="menu">
        <Link to="/#" className="menu-item">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span>Dashboard</span>
        </Link>
        <Link to="/Profile" className="menu-item">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span>My Profile</span>
        </Link>
        <Link to="/" className="menu-item">
          <FontAwesomeIcon icon={faHeart} className="icon" />
          <span>Enrolled</span>
        </Link>
        <Link to="/Courses" className="menu-item">
          <FontAwesomeIcon icon={faBook} className="icon" />
          <span>Courses</span>
        </Link>
        <Link to="/" className="menu-item">
          <FontAwesomeIcon icon={faStar} className="icon" />
          <span>Reviews</span>
        </Link>
        <Link to="/" className="menu-item">
          <FontAwesomeIcon icon={faHistory} className="icon" />
          <span>History</span>
        </Link>
        <Link to="/" className="menu-item">
          <FontAwesomeIcon icon={faBook} className="icon" />
          <span>All Courses</span>
        </Link>
      </div>
      <div className="menu bottom">
        <Link to="/" className="menu-item">
          <FontAwesomeIcon icon={faCog} className="icon" />
          <span>Settings</span>
        </Link>
        <Link to="/" className="menu-item">
          <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
