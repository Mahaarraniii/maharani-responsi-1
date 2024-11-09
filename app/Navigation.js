import React from 'react';
import styles from './page.module.css';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li>
          <a href="#" className={styles.navigationLink}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={styles.navigationLink}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" className={styles.navigationLink}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className={styles.navigationLink}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};