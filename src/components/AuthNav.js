import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/authNav.module.css";
import logo from "../assets/about.svg";

const AuthNav = () => {
  const [active, setActive] = useState(false);

  const burgerClasses = active
    ? `${styles.burger} ${styles.toggle}`
    : `${styles.burger}`;

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Link to="/" className={`${styles.link}`}>
            <img src={logo} alt="logo" />
            <span className={styles.logoText}>Task Manager</span>
          </Link>
        </div>
        <ul className={styles.list}>
          <li>
            <Link to="/" className={styles.link}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className={styles.link}>
              Login
            </Link>
          </li>
          <li className={styles.li3}>
            <Link to="/register" className={styles.link}>
              Sign Up
            </Link>
          </li>
        </ul>

        <div className={burgerClasses} onClick={() => setActive(!active)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div
        className={
          active ? `${styles.navOpen} ${styles.smallNav}` : `${styles.smallNav}`
        }
      >
        <p>This is the nave open</p>
      </div>
    </nav>
  );
};

export default AuthNav;
