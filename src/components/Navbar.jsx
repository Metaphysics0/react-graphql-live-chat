import React from 'react';
import Logo from '../assets/logo.png';

const navbar = () => {
  return (
    <nav className="nav">
      <img src={Logo} alt="Logo" />
      <h2>Live Chat</h2>
    </nav>
  );
};

export default navbar;
