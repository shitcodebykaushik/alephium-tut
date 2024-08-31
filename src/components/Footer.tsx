import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer id="about" className={styles.footer}>
      <div className={styles.content}>
        <h2>About Us</h2>
        <p>
          Aznet Ready is a platform dedicated to providing easy access to Alephium's blockchain technology.
          Our mission is to empower developers and users with secure and scalable blockchain solutions.
        </p>
        <p>&copy; {new Date().getFullYear()} Aznet  Ready. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;