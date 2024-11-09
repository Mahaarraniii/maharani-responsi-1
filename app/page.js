import React from 'react';
import { Navigation } from './Navigation';
import { About } from './About';
import { Skills } from './Skills';
import { ContactInfo } from './ContactInfo';
import styles from './page.module.css';
import './globals.css';

const LandingPageCV = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <About />
      <Skills />
      <ContactInfo />
    </div>
  );
};

export default LandingPageCV;