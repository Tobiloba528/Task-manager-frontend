import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from "../actions/auth";

const initialState = {
  user: {},
  loadingUser: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        loadingUser: true,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loadingUser: true,
        user: action.user,
        error: "",
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        user: {},
        error: action.payload,
        loadingUser: false,
      };
    case LOGIN_USER:
      return {
        ...state,
        loadingUser: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loadingUser: true,
        user: action.user,
        error: "",
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        user: {},
        error: action.payload,
        loadingUser: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
