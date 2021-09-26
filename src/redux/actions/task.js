import axios from "axios";
import { toast } from 'react-toastify'

export const CREATE_TASK = "CREATE_TASK";
export const CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS";
export const CREATE_TASK_FAILURE = "CREATE_TASK_FAILURE";

export const UPDATE_TASK = "UPDATE_TASK";
export const UPDATE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS";
export const UPDATE_TASK_FAILURE = "UPDATE_TASK_FAILURE";

export const GET_TASKS = "GET_TASKS";
export const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS";
export const GET_TASKS_FAILURE = "GET_TASKS_FAILURE";

export const DELETE_TASK = "DELETE_TASK";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const DELETE_TASK_FAILURE = "DELETE_TASK_FAILURE";

const baseUrl = process.env.REACT_APP_BASEURL;

axios.defaults.headers.common["Authorization"] = localStorage.getItem(
  "ACCESS_TOKEN"
);

export const getTasks = () => {
  return (dispatch) => {
    dispatch({ type: GET_TASKS });

    axios({
      method: "get",
      url: `${baseUrl}/tasks`,
    })
      .then((res) => {
        console.log(res);
        dispatch({ type: GET_TASKS_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({ type: GET_TASKS_FAILURE, payload: error.message });
      });
  };
};

export const createTask = (data, history) => {
  return (dispatch) => {
    dispatch({ type: CREATE_TASK });

    axios({
      method: "post",
      url: `${baseUrl}/tasks`,
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: CREATE_TASK_SUCCESS, payload: res.data });
        toast.success('Task Created Successfully')
        history.push("/app");
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({ type: CREATE_TASK_FAILURE, payload: error.message });
        toast.error(error.message)
      });
  };
};

export const deleteTask = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_TASK });
    axios({
      method: "delete",
      url: `${baseUrl}/tasks/${id}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_TASK_SUCCESS });
        toast.success('Task deleted!')
      })
      .catch((error) => {
        dispatch({ type: DELETE_TASK_FAILURE });
        toast.error(error.message)
      });
  };
};

export const updateTask = (id, data) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_TASK });
    axios({
      method: "patch",
      url: `${baseUrl}/tasks/${id}`,
      data: data,
    })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: UPDATE_TASK_SUCCESS, payload: res.data });
        toast.success('Task updated!')
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({ type: UPDATE_TASK_FAILURE, payload: error.message });
        toast.error(error.message)
      });
  };
};
