import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const images = [
  '/images/Profile.jpg',
  '/images/intern.jpg',
  '/images/win.jpg',
  '/images/Work.jpg',
  '/images/7032.jpg',
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      // สุ่ม index ใหม่ที่ไม่ซ้ำกับรูปปัจจุบัน
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * images.length);
      } while (images[nextIndex] === currentImage && images.length > 1);
      setCurrentImage(images[nextIndex]);
    }, 10000); // 10 วินาที
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="hero">
      {/* เพิ่ม container ใหม่สำหรับจัดวางรูปและข้อความ */}
      <div className="hero-container">
        {/* ส่วนรูปภาพ */}
        <div className="hero-image-section">
          <img 
            src={currentImage}
            alt="รูปโปรไฟล์" 
            className="profile-image"
          />
        </div>

        {/* ส่วนข้อความ */}
        <div className="hero-text-section">
          <h1>สวัสดีครับ ผมชื่อนายบุญได้ แสงจั่น</h1>
          <h1>สำเร็จการศึกษาจากมหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี<br />สาขาวิทยาการคอมพิวเตอร์</h1>
          <h2>Back-End Developer / FullStack Developer</h2>
          <p>ยินดีต้อนรับสู่ Portfolio ของผม</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">ดูผลงาน</a>
            <a href="#contact" className="btn secondary">ติดต่อ</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;