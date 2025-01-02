import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/images/star-bucks.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/watch">Watch Now</Link></li>
          <li><Link to="/review">Review</Link></li>
          <li><Link to="/shop">Shop Now</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      
      {/* Hamburger button for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
