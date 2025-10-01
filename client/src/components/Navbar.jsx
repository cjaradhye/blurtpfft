import React, { useState } from "react";
import "./styles/Navbar.css";
import { gsap } from "gsap";

const Navbar = ({ setCurrentLayer }) => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => setExpanded(true);
  const handleMouseLeave = () => setTimeout(() => setExpanded(false), 1500);

  const handleNavigation = (layer) => {
    gsap.to(".mask", {
      height: "100%",
      duration: 1,
      ease: "power2.inOut",
      onStart: () => gsap.to(".mask", { opacity: 1, duration: 0.3 }),
      onComplete: () => {
        setCurrentLayer(layer);
        gsap.to(".layers-container", {
          y: `-${layer * 100}vh`,
          duration: 0,
        });
        gsap.to(".mask", {
          height: "0%",
          duration: 1,
          onComplete: () => gsap.to(".mask", { opacity: 0, duration: 0.3 }),
        });
      },
    });
  };

  return (
    <div
      className={`navbar ${expanded ? "expanded" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mylogo" onClick={() => handleNavigation(0)}>
        <img src="./navbarlogo.png" alt="Blurt Logo" className="logo" />
      </div>

      <div className="additional-links">
        <div className="filler"></div>
        <a onClick={() => handleNavigation(1)} style={{ cursor: "pointer" }}>
          overview
        </a>
        <a onClick={() => handleNavigation(2)} style={{ cursor: "pointer" }}>
          register
        </a>
        <a onClick={() => handleNavigation(3)} style={{ cursor: "pointer" }}>
          contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
