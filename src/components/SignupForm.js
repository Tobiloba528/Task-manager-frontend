import React, { useState } from "react";
import styles from "../styles/authForm.module.css";
import Input from "./common/Input";

const SignupForm = () => {
  const [data, setData] = useState({ email: '', name: '', password: ''})

  const handleChange = ({ currentTarget: input }) => {
    let newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
}
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h2>Sign up</h2>
        <form className={styles.form}>
          <Input label="Full Name" placeholder="Enter full name" type="text" name='name' value={data.name} handleChange={handleChange}/>
          <Input label="Email" placeholder="Enter email" type="email" name='email' value={data.email} handleChange={handleChange}/>
          <Input label="Password" placeholder="****" type="password" name='password' value={data.password} handleChange={handleChange}/>
          <button>Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
