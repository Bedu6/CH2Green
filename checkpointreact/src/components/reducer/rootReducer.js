import {combineReducers} from 'redux';
import usersReducer from './usersReducer';
import dependentsReducer from './dependentsReducer';

const rootReducer= combineReducers({
    users: usersReducer,
    dependents:dependentsReducer
});

export default rootReducer;