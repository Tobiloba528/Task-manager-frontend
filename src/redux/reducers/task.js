import { DELETE_USER_SUCCESS } from "../actions/user";
import {
  CREATE_TASK,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
} from "../actions/task";

const initialState = {
  tasks: [],
  task: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        loading: true,
      };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        task: action.payload,
      };
    case CREATE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_TASKS:
      return {
        ...state,
        getTasksLoading: true,
      };
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        getTasksLoading: false,
        tasks: action.payload,
      };
    case GET_TASKS_FAILURE:
      return {
        ...state,
        getTasksLoading: false,
        getTasksError: action.payload,
      };
    case UPDATE_TASK:
      return {
        ...state,
        updateTaskLoading: true,
      };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        updateTaskLoading: false,
      };
    case UPDATE_TASK_FAILURE:
      return {
        ...state,
        updateTaskLoading: false,
      };
    case DELETE_TASK:
      return {
        ...state,
        deleteTaskLoading: true,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        deleteTaskLoading: false,
      };
    case DELETE_TASK_FAILURE:
      return {
        ...state,
        deleteTaskLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
