"use client";
import React, { useState } from 'react';
import styles from './page.module.css';

export const Skills = () => {
  const [imageSrc, setImageSrc] = useState('/api/placeholder/100/100');

  const handleMouseOver = (newSrc) => {
    setImageSrc(newSrc);
  };

  const handleMouseOut = () => {
    setImageSrc('/api/placeholder/100/100'); // Gambar default
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        <h2>My Skills</h2>
        <div className={styles.skillsGrid}>
          <div
            className={styles.skillCard}
            onMouseOver={() => handleMouseOver('/path/to/html-image.jpg')}
            onMouseOut={handleMouseOut}
          >
            <img src={imageSrc} alt="HTML" />
            <h3>HTML</h3>
          </div>
          <div
            className={styles.skillCard}
            onMouseOver={() => handleMouseOver('/path/to/css-image.jpg')}
            onMouseOut={handleMouseOut}
          >
            <img src={imageSrc} alt="CSS" />
            <h3>CSS</h3>
          </div>
          <div
            className={styles.skillCard}
            onMouseOver={() => handleMouseOver('/path/to/javascript-image.jpg')}
            onMouseOut={handleMouseOut}
          >
            <img src={imageSrc} alt="JavaScript" />
            <h3>JavaScript</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
