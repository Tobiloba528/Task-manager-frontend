import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "../styles/createTask.module.css";
import Input from "../components/common/Input";
import SelectInput from "../components/common/SelectInput";
import { createTask } from "../redux/actions/task";
import { useHistory } from "react-router-dom";
import Button from "../components/common/Button";
import { toast } from 'react-toastify';

const CreateTaskScreen = (props) => {
  const [data, setData] = useState({ completed: false, description: "" });
  const history = useHistory();

  const handleChange = ({ currentTarget: input }) => {
    let newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!data.description){
      return toast.error('Tell us the task descrition!')
    }
    props.createTask(data, history);
  };

  const options = [
    { title: "False", value: false },
    { title: "True", value: true },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Create Task</h2>
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
        <Button
          label="Create Task"
          handleSubmit={handleSubmit}
          classes={styles.btn}
          loading={props.loading}
        />
      </form>
    </div>
  );
};

const mapStateToProps = ({ task }) => {
  return {
    loading: task.loading,
    task: task.task,
    error: task.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (data, history) => dispatch(createTask(data, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskScreen);
