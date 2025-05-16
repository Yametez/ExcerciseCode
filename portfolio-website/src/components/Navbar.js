import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          นายบุญได้ แสงจั่น
        </a>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">หน้าแรก</a>
          <a href="#about" className="nav-link">เกี่ยวกับ</a>
          <a href="#skills" className="nav-link">ทักษะ</a>
          <a href="#projects" className="nav-link">ผลงาน</a>
          <a href="#contact" className="nav-link">ติดต่อ</a>
        </div>

        <div 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;