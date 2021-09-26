import { combineReducers } from "redux";
import authReducer from './reducers/auth';
import userReducer from './reducers/user';
import taskReducer from './reducers/task'


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    task: taskReducer
})

export default rootReducer;