import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTasks, deleteTask, updateTask } from "../redux/actions/task";
import styles from "../styles/taskList.module.css";
import { useHistory } from "react-router-dom";

const TaskList = (props) => {
  const { deleteTaskLoading, updateTaskLoading } = props;

  const history = useHistory();

  useEffect(() => {
    props.getTasks();
  }, [deleteTaskLoading, updateTaskLoading]);

  const handleDelete = (id) => {
    props.deleteTask(id);
  };

  const handleComplete = (id) => {
    props.updateTask(id, { completed: true });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Task List</h2>
      <div className={styles.table}>
        <table className={`table table-hover table-borderless`}>
          <thead>
            <tr className={styles.tableHead}>
              <th>Description</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.tasks.length > 0 &&
              !props.loading &&
              props.tasks.map((task) => (
                <tr className={styles.tableRow} key={task._id}>
                  <td>{task.description}</td>
                  <td>{task.completed.toString()}</td>
                  <td>
                    {!task.completed && (
                      <button
                        className={`${styles.btn} ${styles.btn1}`}
                        onClick={() => handleComplete(task._id)}
                      >
                        Complete
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      className={`${styles.btn} ${styles.btn2}`}
                      onClick={() => handleDelete(task._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {props.loading && (
          <div className={styles.empty}>
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        )}
        {props.tasks.length === 0 && !props.loading && (
          <div className={styles.empty}>
            <h2>You currently have no tasks!</h2>
            <button
              className={styles.btn}
              onClick={() => history.push("/app/create-task")}
            >
              Add Task
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ task }) => {
  return {
    loading: task.getTasksLoading,
    tasks: task.tasks,
    error: task.getTasksError,
    deleteTaskLoading: task.deleteTaskLoading,
    updateTaskLoading: task.updateTaskLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTasks: () => dispatch(getTasks()),
    deleteTask: (id) => dispatch(deleteTask(id)),
    updateTask: (id, data) => dispatch(updateTask(id, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
