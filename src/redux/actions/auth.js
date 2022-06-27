import axios from "axios";
import { toast } from "react-toastify";

export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

const baseUrl = process.env.REACT_APP_BASEURL;

export const createUser = (data) => {
  console.log('consoling....')
  return (dispatch) => {
    dispatch({
      type: CREATE_USER,
    });
    axios({
      method: "post",
      url: `${process.env.REACT_APP_BASEURL}/users`,
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data, "this is data from redux action");
        dispatch({
          type: CREATE_USER_SUCCESS,
          user: data.user,
          token: data.token,
        });
        localStorage.setItem("ACCESS_TOKEN", `Bearer ${data.token}`);
        window.location.href = "/app";
        toast.success("Account created successfully!");
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({
          type: CREATE_USER_FAILURE,
          payload: error.message,
        });
        toast.error(error.message);
      });
  };
};

export const loginUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_USER,
    });
    axios({
      method: "post",
      url: `https://omitomo-new-task-manager.herokuapp.com/users/login`,
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data);
        dispatch({
          type: LOGIN_USER_SUCCESS,
          user: data.user,
          token: data.token,
        });
        localStorage.setItem("ACCESS_TOKEN", `Bearer ${data.token}`);
        window.location.href = "/app";
        toast.success("Logged in Successfully!");
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({
          type: LOGIN_USER_FAILURE,
          payload: error.message,
        });
        toast.error(error.message);
      });
  };
};
