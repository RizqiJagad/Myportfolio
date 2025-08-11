// src/components/TechStack.tsx
import React from 'react';
import { FaReact, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiMongodb, SiMysql, SiMui, SiNextdotjs, SiChakraui } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import './TechStack.css';

const TechStack: React.FC = () => {
  return (
    <section id="tech" className="section tech-section">
      <div className="container tech-container">
        <div className="tech-list">
          <div className="tech-category">
            <h3>Core Stack I Work With</h3>
            <div className="icons-wrapper">
              <FaReact /> <SiNextdotjs /> <SiTypescript /> <FaJs /> <FaNodeJs /> <SiExpress />
            </div>
          </div>
          <div className="tech-category">
            <h3>UI & Styling</h3>
            <div className="icons-wrapper">
              <SiMui /> <SiChakraui /> <RiTailwindCssFill />
            </div>
          </div>
          <div className="tech-category">
            <h3>Databases I Use</h3>
            <div className="icons-wrapper">
              <SiMongodb /> <SiMysql />
            </div>
          </div>
        </div>
        <div className="tech-heading-wrapper">
          <h2 className="tech-heading">TECH<br />SET</h2>
        </div>
      </div>
    </section>
  );
};

export default TechStack;