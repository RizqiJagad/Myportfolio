// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
// Mengimpor ikon dari library react-icons
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
// Mengimpor file CSS spesifik untuk komponen ini
import './Header.css';

const Header: React.FC = () => {
     const fullText = "Taqiy Rizqi Jagad Samudra";
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        // Mode menghapus
        setDisplayedText(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(50); // Kecepatan menghapus lebih cepat
      } else {
        // Mode mengetik
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(150); // Kecepatan mengetik
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    // Transisi antara mode mengetik dan menghapus
    if (!isDeleting && displayedText === fullText) {
      clearTimeout(timer);
      setTimeout(() => setIsDeleting(true), 1500); // Tunggu sebentar sebelum menghapus
    } else if (isDeleting && displayedText === '') {
      clearTimeout(timer);
      setTypingSpeed(500);
      setTimeout(() => setIsDeleting(false), 500); // Tunggu sebentar sebelum mulai mengetik lagi
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting]);

  return (
    <header className="header-section">
      <div className="container header-content">
        <h3 className="subheading">Hi, I am</h3>
        <h1 className="main-heading">
        {displayedText}
        <span className="blinking-cursor">|</span>
        </h1>
        <p className="title">Full Stack Developer</p>
        <div className="social-icons">
          {/* Tautan ke profil sosial media */}
          <a href="https://github.com/RizqiJagad" className="social-icon"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/taqiy-rizqi-jagad-samudra/" className="social-icon"><FaLinkedin /></a>
          <a href="mailto:taqiyrizqijagad@gmail.com" className="social-icon"><FaEnvelope /></a>
        </div>
        <div className="nav-buttons">
          {/* Tautan untuk navigasi ke bagian lain di halaman yang sama */}
          <a href="#about" className="glow-button">About Me</a>
          <a href="#tech" className="glow-button">Tech</a>
        </div>
      </div>
    </header>
  );
};

export default Header;