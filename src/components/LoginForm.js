import React, { useState } from "react";
import styles from "../styles/authForm.module.css";
import Input from "./common/Input";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    let newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
}


  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h2>Login</h2>
        <form className={styles.form}>
          <Input label="Email" placeholder="Enter email" type="email" name='email' value={data.email} handleChange={handleChange}/>
          <Input label="Password" placeholder="****" type="password" name='password' value={data.password} handleChange={handleChange}/>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
