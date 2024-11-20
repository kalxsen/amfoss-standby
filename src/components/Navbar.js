import React from 'react';
import './navibar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Flaunt</div>
      <ul className="navbar-links">
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Let’s Talk</li>
      </ul>
    </nav>
  );
}

export default Navbar;