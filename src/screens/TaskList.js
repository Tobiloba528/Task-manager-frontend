import React from "react";
import styles from "../styles/taskList.module.css";

const TaskList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Task List</h2>
      <div className={styles.table}>
        <table className={`table table-hover table-borderless`}>
          <thead>
            <tr className={styles.tableHead}>
              <th>Description</th>
              <th>Status</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tableRow}>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@fat</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
