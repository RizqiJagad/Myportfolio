// src/components/About.tsx
import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        <div className="about-heading-wrapper">
          <h2 className="about-heading">ABOUT ME</h2>
        </div>
        <div className="about-content">
          {/* Ringkasan Diri */}
          <p>
            Saya memiliki minat di bidang web development dan Game Developer. 
            menguasai bahasa pemrograman JavaScript dan C# serta framework seperti NextJS. 
            Dengan fokus pada pengembangan web dan desain antarmuka, dia memadukan kreativitas desain dengan keterampilan teknis untuk menciptakan solusi web yang inovatif dan fungsional.
          </p>

          <div className="experience">
            <h3>WORK EXPERIENCES</h3>
            
            <h4>Intership Full-Stack Developer</h4>
            <p>@PT Perigi Capital Inovasi | Feb 2024 - Agust 2025</p>
            <h4>Game Programmer</h4>
            <p>@FatBox Studio Jakarta | Mar 2021 - Jan 2024</p>
          </div>
          
          <div className="experience">
            <h3>EDUCATION</h3>
            
            <h4>Politeknik Negeri Media Kreatif - Jakarta</h4>
            <p>Diploma in Desain, IPK 3.9/4.00</p>
            
            <h4>Studi Independen (Kampus Merdeka) Dicoding Indonesia</h4>
            <p>Sertifikat Pengembang Website Font-End dan Back-End</p>
            <h4>Studi Independen (Kampus Merdeka) Agate</h4>
            <p>Sertifikat Game Developer</p>
              <h4>Sertifikat Kompentensi Computer Game Programmer (Digital Games Developer) - BNSP</h4>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;