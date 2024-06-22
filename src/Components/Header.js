// src/components/Header.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Header.css';

const Header = () => {
  const { user } = useContext(AppContext);

  return (
    <header className="header">
      <div className="welcome-message">
        <h1>Welcome Back, {user.name}!</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
        <button>Get Started</button>
      </div>
    </header>
  );
};

export default Header;
