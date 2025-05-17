import React, { useState } from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'MiniProject',
    description: 'ทำเว็บไซต์ขายหนังสือการ์ตูนโดยตัวเว็บไซต์สามารถเลือกซื้อหนังสือ/ดูรายละเอียด/ดูใบเสร็จจากยอดนั้นได้ ในส่วนหลังบ้านสามารถ[เพิ่ม/ลด/ลบ]หนังสือในสต๊อกได้ สามารถจัดการสมาชิกที่มีอยู่ในระบบ[แก้ไข/ลบบัญชี]ผู้ใช้เหล่านั้นได้ สามารถดูใบเสร็จในแต่ละวันตามที่ต้องการได้',
    images: ['/imagesP1/Home.png', 
      '/imagesP1/Descripstion.png', 
      '/imagesP1/Order.png', 
      '/imagesP1/BackHomepage.png', 
      '/imagesP1/Editeuser.png', 
      '/imagesP1/EditeBook.png', 
      '/imagesP1/AddBook.png', 
      '/imagesP1/CheckOrder.png', 
      '/imagesP1/StatusOreder.png'],
    videos: []
  },
  {
    title: 'Project 2',
    description: 'โปรเจคนี้มีทั้งรูปและวิดีโอ',
    images: ['/images/project2-1.jpg', '/images/project2-2.jpg'],
    videos: ['https://youtube.com/shorts/YUACIjCFVT4?si=DQ4LNZB-YwKwCBCl']
  },
  {
    title: 'Project 3',
    description: 'รายละเอียดโปรเจค 3',
    images: ['/images/project3.jpg'],
    videos: []
  },
  // เพิ่มโปรเจคอื่นๆ
];

const Projects = () => {
  // สร้าง state สำหรับ index ของแต่ละโปรเจค
  const [currentIndexes, setCurrentIndexes] = useState(Array(projects.length).fill(0));

  // ฟังก์ชันเปลี่ยนรูป
  const handlePrev = (projectIdx) => {
    setCurrentIndexes(prev =>
      prev.map((idx, i) =>
        i === projectIdx
          ? (idx === 0 ? projects[i].images.length - 1 : idx - 1)
          : idx
      )
    );
  };

  const handleNext = (projectIdx) => {
    setCurrentIndexes(prev =>
      prev.map((idx, i) =>
        i === projectIdx
          ? (idx === projects[i].images.length - 1 ? 0 : idx + 1)
          : idx
      )
    );
  };

  return (
    <div className="section-box projects-section">
      <h2>ผลงานของผม</h2>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            {project.images && project.images.length > 0 && (
              <div className="custom-carousel">
                <button onClick={() => handlePrev(idx)}>&lt;</button>
                <img
                  src={project.images[currentIndexes[idx]]}
                  alt={project.title + ' image'}
                  className="project-img"
                />
                <button onClick={() => handleNext(idx)}>&gt;</button>
              </div>
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;