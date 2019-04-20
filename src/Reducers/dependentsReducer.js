import {
	BRING_DEP_INFO, ERROR_DEP_INFO, LOADING_DEPS, NEW_DEPENDENCY,
    NEW_DEP_NAME, NEW_DEP_AGE, DEP_ADDED, DEP_EDITED 
} from '../Types/dependentsTypes';

const INITIAL_STATE = {
	d_info: [],
	d_loading: false,
	d_error: '',
    dependency: '',
	d_name: '',
	d_age:''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {

		case BRING_DEP_INFO:
			return { ...state, d_info: action.payload, loading: false };

		case ERROR_DEP_INFO:
			return { ...state, d_error: action.payload, loading: false };

		case LOADING_DEPS:
			return { ...state, d_loading: true };

		case NEW_DEPENDENCY:
			return { ...state, dependency: action.payload, loading: false };
		
		case NEW_DEP_NAME:
			return { ...state, d_name: action.payload, loading: false };

		case NEW_DEP_AGE:
			return { ...state, d_age: action.payload, loading: false };
	
		case DEP_ADDED:
			return { ...state, dependency: '', d_name: '', d_age:'', d_loading: false, d_info: [] };

		case DEP_EDITED:
		return { ...state, d_loading: false, d_info: [] };

		default: return state;
	}
};