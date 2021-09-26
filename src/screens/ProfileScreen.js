import React, { useState, useEffect } from "react";
import moment from "moment";
import { connect } from "react-redux";
import Input from "../components/common/Input";
import styles from "../styles/profile.module.css";
import { getMe, deleteMe, updateMe } from "../redux/actions/user";
import { getTasks } from "../redux/actions/task";
import Button from "../components/common/Button";

const ProfileScreen = (props) => {
  const [data, setData] = useState({
    email: "",
    name: "",
    createdAt: new Date(),
  });

  useEffect(() => {
    props.getMe();
    props.getTasks();
  }, []);

  useEffect(() => {
    setData(props.user);
  }, [props]);

  const handleUpdate = (e) => {
    e.preventDefault();
    props.updateMe({ email: data.email, name: data.name });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteMe();
  };

  const handleChange = ({ currentTarget: input }) => {
    let newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
  };

  const completedTasks =
    props.tasks.length > 0
      ? props.tasks.filter((task) => task.completed).length
      : 0;
  const uncompletedTasks =
    props.tasks.length > 0
      ? props.tasks.filter((task) => !task.completed).length
      : 0;

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
        <p>
          Account Created at:{" "}
          {moment(data.createdAt).format("MMMM DD, YYYY hh:mm a")}
        </p>
        <div className={styles.tasks}>
          <p>
            Completed Tasks:{" "}
            <span className={styles.badge}>{completedTasks}</span>
          </p>
          <p>
            Uncompleted Tasks:{" "}
            <span className={styles.badge}>{uncompletedTasks}</span>
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            label="Save Changes"
            handleSubmit={handleUpdate}
            classes={`${styles.btn} ${styles.btn1}`}
            loading={props.updateUserLoading}
          />
          <Button
            label="Delete Account"
            handleSubmit={handleDelete}
            classes={`${styles.btn} ${styles.btn2}`}
            loading={props.deleteUserLoading}
          />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ user, task }) => {
  return {
    loading: user.loading,
    user: user.user,
    error: user.error,
    updateUserLoading: user.updateUserLoading,
    deleteUserLoading: user.deleteUserLoading,
    tasks: task.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMe: () => dispatch(getMe()),
    deleteMe: () => dispatch(deleteMe()),
    updateMe: (data) => dispatch(updateMe(data)),
    getTasks: () => dispatch(getTasks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
