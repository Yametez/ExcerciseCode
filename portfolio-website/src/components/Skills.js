import React, { useEffect } from 'react';
import '../styles/Skills.css';

const skills = [
  'C#',
  'CSS',
  'HTML',
  'Java',
  'JavaScript',
  'Python',
  'PHP',
  'SQL',
];

const Skills = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="section-box skills-section">
      <h2>ทักษะด้านProgramming</h2>
      <ul className="skills-list">
        {skills.map((skill, idx) => (
          <li className="skill-item animate-on-scroll" key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;