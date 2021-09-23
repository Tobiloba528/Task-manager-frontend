import React from "react";
import HomeCard from "./HomeCard";
import styles from "../styles/homeFeature.module.css";
import featureOne from '../assets/feature1.svg'
import featureTwo from '../assets/feature2.svg'
import featureThree from '../assets/feature3.svg'

const HomeFeatures = () => {
  return (
    <div className={styles.container}>
        <h2>Features</h2>
        <p>The following are some of the features you will get access to when you register on Task Manager:</p>
      <div className={styles.inner}>
        <HomeCard className={styles.card} title="Optimization" content="" logo={featureOne}/>
        <HomeCard className={styles.card} title="Notification" content="" logo={featureTwo}/>
        <HomeCard className={styles.card} title="Up To Date" content="" logo={featureThree}/>
      </div>
    </div>
  );
};

export default HomeFeatures;
