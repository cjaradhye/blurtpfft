import React, { useState } from 'react';
import './Navbar.css';
import blurtLogo from './navbarlogo.png';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setExpanded(false);
    }, 1500);
  };

  const handleLogoClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`navbar ${expanded ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='mylogo' onClick={handleLogoClick}>
        <img src={blurtLogo} alt="Blurt Logo" className="logo"  />
      </div>
      
      <div className="additional-links">
        <div className='filler'></div>
        <a href="#overview">overview</a>
        <a href="#trial">trial</a>
        <a href="#register">register</a>
        <a href="#contact">contact</a>
      </div>
    </div>
  );
};

export default Navbar;