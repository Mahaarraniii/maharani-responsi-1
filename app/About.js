import React from 'react';
import styles from './page.module.css';

export const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <img
          src="https://static.tnn.in/thumb/msid-113129472,thumbsize-985876,width-1280,height-720,resizemode-75/113129472.jpg?quality=100"
          alt="Profile Picture"
          className={styles.profileImage}
        />
        <div className={styles.aboutContent}>
          <h2>Maharani</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quisquam non asperiores, corrupti iste minus exercitationem ex ea. Praesentium ex voluptatum corporis eligendi architecto magnam officiis a excepturi, impedit facere.
          </p>
        </div>
      </div>
    </section>
  );
};