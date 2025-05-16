import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>สวัสดีครับ <br />ผมชื่อนายบุญได้ แสงจั่น </h1>
        {/* เพิ่มส่วนรูปภาพ */}
        <div className="profile-image-container">
          <img 
            src="/images/Profile.jpg" 
            alt="รูปโปรไฟล์" 
            className="profile-image"
          />
        </div>
        <h1 style={{ fontSize: "1.7rem" }} className="edu-text">สำเร็จการศึกษาจากมหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี <br />คณะวิทยาศาสตร์และเทคโนโลยี<br />สาขาวิทยาการคอมพิวเตอร์</h1>
        <h2>Back-End Developer</h2>
        <p>ยินดีต้อนรับสู่ Portfolio ของผม</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">ดูผลงาน</a>
          <a href="#contact" className="btn secondary">ช่องทางติดต่อ</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
