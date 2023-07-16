// components/Header.js

import React from 'react';
import styles from '../../styles/header.module.css'; // Import the header CSS module
import navbarStyles from '../../styles/navbar.module.css'; // Import the navbar CSS module
import Image from 'next/image'

export default function Header() {
  return (
    <div className={styles.header}>

      <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.navbarlogo}>
      <Image
      src="/../public/logo_circle.png"
      alt="Picture of the author"
      width="32"
      height="32"
      layout="fixed" 
  />
  <h3>Rishabh Naik</h3>
        </div>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
      </div>
  );
}
