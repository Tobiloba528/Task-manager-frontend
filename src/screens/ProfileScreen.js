import React, { useState } from "react";
import Input from "../components/common/Input";
import styles from "../styles/profile.module.css";

const ProfileScreen = () => {
  const [data, setData] = useState({ email: "", name: "" });

  const handleChange = ({ currentTarget: input }) => {
    let newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Profile</h2>
      <form className={styles.form}>
        <Input
          label="Full Name"
          placeholder="Enter full name"
          type="text"
          name="name"
          value={data.name}
          handleChange={handleChange}
        />
        <Input
          label="Email"
          placeholder="Enter email"
          type="email"
          name="email"
          value={data.email}
          handleChange={handleChange}
        />
        <p>User Created at: 10: 00pm July, 2020</p>
        <div className={styles.tasks}>
          <p>
            Completed Tasks: <span className={styles.badge}>5</span>
          </p>
          <p>
            Uncompleted Tasks: <span className={styles.badge}>10</span>
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={`${styles.btn} ${styles.btn1}`}>
            Save Changes
          </button>
          <button className={`${styles.btn} ${styles.btn2}`}>
            Delete Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileScreen;
