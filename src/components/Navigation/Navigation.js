import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = () => (
  <nav className={styles.nav}>
    <NavLink
      to="/"
      exact="true"
      activeclassname={styles.active}
      className={styles.authLink}
    >
      Main
    </NavLink>

    <NavLink
      to="/phonebook"
      exact="true"
      activeclassname={styles.active}
      className={styles.authLink}
    >
      Phonebook
    </NavLink>
  </nav>
);

export default Navigation;
