import React from 'react';

import { NavLink } from 'react-router-dom';
import styles from './authNav.module.css';

export default function AuthNav() {
  return (
    <div className={styles.authNavContainer}>
      <NavLink
        to="/signup"
        exact="true"
        activeclassname={styles.active}
        className={styles.authLink}
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/login"
        exact="true"
        activeclassname={styles.active}
        className={styles.authLink}
      >
        Sign In
      </NavLink>
    </div>
  );
}
