import React from "react";
import styles from "../styles/footer.module.css";
import logo from "../assets/about.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.one}>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className={styles.two}>
          <img src={logo} alt="logo" />
          <p>© 2021 Task-Manager. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
