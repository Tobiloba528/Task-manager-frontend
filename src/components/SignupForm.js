import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "../styles/authForm.module.css";
import Input from "./common/Input";
import { createUser } from "../redux/actions/auth";
import Button from "./common/Button";

const SignupForm = (props) => {
  const [data, setData] = useState({ email: "", name: "", password: "" });

  const handleChange = ({ currentTarget: input }) => {
    let newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createUser(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h2>Sign up</h2>
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
          <Input
            label="Password"
            placeholder="****"
            type="password"
            name="password"
            value={data.password}
            handleChange={handleChange}
          />
          <Button
            label="Sign up"
            handleSubmit={handleSubmit}
            classes={styles.btn}
            loading={props.loading}
          />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    loading: auth.loadingUser,
    user: auth.user,
    error: auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (data) => dispatch(createUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
