import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="container nav_bar">
      <div className="left nav_items">Portfolio</div>
      <div className="right">
        <a href="#home" className="nav_items">Home</a>
        <a href="#about" className="nav_items">About</a>
        <a href="#experience" className="nav_items">Experience</a>
        <a href="#skills" className="nav_items">Skills</a>
        <a href="#tools" className="nav_items">Tools</a>
        <a href="#projects" className="nav_items">Portfolio</a>
        <a href="#contact" className="nav_items">Contact</a>
      </div>
    </div>
  );
};

