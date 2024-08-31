import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link href='/' className={styles.logo}>Aznet.</Link>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/project" className={styles.navItem}>
            Project
          </Link>
        </li>
        <li>
          <Link href="/Market" className={styles.navItem}>
            Market
          </Link>
        </li>
        {/* <li>
          <Link href="/fintech" className={styles.navItem}>
            Fintech
          </Link>
        </li> */}
        <li>
          <Link href="/about" className={styles.navItem}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.navItem}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
