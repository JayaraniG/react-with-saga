
import { combineReducers } from 'redux';
import LoginReducer from '../reducers/LoginReducer';
import usersReducer from '../reducers/usersReducer';

const rootReducer = combineReducers({
    LoginReducer,
    usersReducer
});

export default rootReducer;
