import React from "react";
import styles from "../styles/homeCard.module.css";

const HomeCard = ({ title, logo }) => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default HomeCard;
