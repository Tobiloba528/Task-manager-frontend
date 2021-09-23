import React from "react";
import styles from "../styles/home.module.css";
import Lottie from "react-lottie";
import taskAnimation from "../assets/lotties/tasks.json";
import useWindowSize from '../hooks/useWindowSize';

const Home = () => {

  const { width, height} = useWindowSize();


  const taskOptions = {
    loop: true,
    autoplay: true,
    animationData: taskAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.home}>
      <div className="content">
        <h1>
          Are you finding it hard to keep <br /> track of your tasks?
        </h1>
        <p>
          Then sign up to get access to all the amazing tools to help manage{" "}
          <br />
          you tasks effective
        </p>
        <button>Get Started</button>
      </div>
      <div className={styles.lottie}>
      <Lottie options={taskOptions} height={400} width={width < 400  ? width / 1.2 : 400} />
      </div>
    </div>
  );
};

export default Home;
