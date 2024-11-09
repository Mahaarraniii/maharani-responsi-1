import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import styles from './page.module.css';

export const ContactInfo = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2>Get in Touch</h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <Mail size={24} />
            </div>
            <div>
              <h3>Email</h3>
              <p>maharani@example.com</p>
            </div>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <Phone size={24} />
            </div>
            <div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <Linkedin size={24} />
            </div>
            <div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/maharani</p>
            </div>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <Github size={24} />
            </div>
            <div>
              <h3>GitHub</h3>
              <p>github.com/maharani</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};