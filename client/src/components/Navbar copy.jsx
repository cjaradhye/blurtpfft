import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setCurrentLayer }) => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => setExpanded(true);
  const handleMouseLeave = () => setTimeout(() => setExpanded(false), 1500);

  return (
    <div className={`navbar ${expanded ? 'expanded' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='mylogo' onClick={() => setCurrentLayer(0)}>
        <img src="./navbarlogo.png" alt="Blurt Logo" className="logo" />
      </div>
      
      <div className="additional-links">
        <div className='filler'></div>
        <a onClick={() => setCurrentLayer(1)} style={{ cursor: 'pointer' }}>overview</a>
        <a onClick={() => setCurrentLayer(3)} style={{ cursor: 'pointer' }}>register</a>
        <a onClick={() => setCurrentLayer(4)} style={{ cursor: 'pointer' }}>contact</a>
      </div>
    </div>
  );
};

export default Navbar;
