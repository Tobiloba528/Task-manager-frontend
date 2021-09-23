import React, { useState } from "react";
import styles from "../styles/createTask.module.css";
import Input from "../components/common/Input";
import SelectInput from "../components/common/SelectInput";

const CreateTaskScreen = () => {
  const [data, setData] = useState({ completed: false, description: "" });

  const handleChange = ({ currentTarget: input }) => {
    let newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
  };

  const options = [
    { title: "False", value: false },
    { title: "True", value: true },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Create task</h2>
      <form className={styles.form}>
        <Input
          label="Description"
          placeholder="Enter description"
          type="text"
          name="description"
          value={data.description}
          handleChange={handleChange}
        />
        <SelectInput
          label="Task status"
          name="completed"
          handleChange={handleChange}
          value={data.completed}
          options={options}
        />
        <button className={styles.btn}>Create Task</button>
      </form>
    </div>
  );
};

export default CreateTaskScreen;
