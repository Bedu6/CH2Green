import {combineReducers} from 'redux';
import usersReducer from './usersReducer';
import dependentsReducer from './dependentsReducer';

const rootReducer= combineReducers({
    user: usersReducer,
    dependent:dependentsReducer
});

export default rootReducer;