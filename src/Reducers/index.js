import { combineReducers } from 'redux';
import usersReducers from './usersReducer';
import dependentsReducer from './dependentsReducer';

export default combineReducers({
	usersReducers,
	dependentsReducer
});