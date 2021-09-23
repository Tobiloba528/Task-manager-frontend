import React from "react";
import styles from "../styles/homeAbout.module.css";
import logo from "../assets/about.svg";

const HomeAbout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={logo} alt='about'/>
      </div>
      <div className={styles.contentContainer}>
        <h1>Task Manager</h1>
        <h4>
          — is a service aimed at verifying the information your computer sends
          to the web.
        </h4>
        <p>
          It is perfect for checking proxy or socks servers, providing
          information about your VPN server and scanning black lists for your IP
          address. The service shows whether your computer enables Flash and
          Java, as well as its language and system settings, OS and web-browser,
          define the DNS etc.
        </p>
        <p>
          The main and the most powerful side of our service is the interactive
          checking by Java, Flash and WebRTC, allowing to detect the actual
          system settings and its weaknesses, which can be used by third-party
          resources to find out the information about your computer.
        </p>
      </div>
    </div>
  );
};

export default HomeAbout;
