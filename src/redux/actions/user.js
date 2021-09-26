import axios from "axios";
import { toast } from 'react-toastify';

export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

const baseUrl = process.env.REACT_APP_BASEURL;

axios.defaults.headers.common["Authorization"] = localStorage.getItem(
  "ACCESS_TOKEN"
);

export const getMe = () => {
  return (dispatch) => {
    dispatch({ type: GET_USER });
    axios({
      method: "get",
      url: `${baseUrl}/users/me`,
    })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: GET_USER_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: GET_USER_FAILURE, payload: error.message });
      });
  };
};

export const deleteMe = () => {
  return (dispatch) => {
    dispatch({ type: DELETE_USER });
    axios({
      method: "delete",
      url: `${baseUrl}/users/me`,
    })
      .then((res) => {
        console.log(res);
        dispatch({ type: DELETE_USER_SUCCESS });
        localStorage.removeItem("ACCESS_TOKEN");
        window.location.href = '/home'
        toast.success('Account deleted successfully!')
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({ type: DELETE_USER_FAILURE });
        toast.error(error.message)
      });
  };
};

export const updateMe = (data) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_USER });
    axios({
      method: "patch",
      url: `${baseUrl}/users/me`,
      data: data,
    })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
        toast.success('Account updated successfully!')
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
        toast.error(error.message)
      });
  };
};
