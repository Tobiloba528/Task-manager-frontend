import {
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "../actions/user";

const initialState = {
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case UPDATE_USER: 
      return {
        ...state,
        updateUserLoading: true
      }
      case UPDATE_USER_SUCCESS: 
      return {
        ...state,
        updateUserLoading: false,
        user: action.payload,
      }
      case UPDATE_USER_FAILURE: 
      return {
        ...state,
        updateUserLoading: false,
        error: action.payload,
      }
    case DELETE_USER:
      return {
        ...state,
        deleteUserLoading: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        deleteUserLoading: false,
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        deleteUserLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
