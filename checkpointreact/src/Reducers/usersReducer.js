import {
	BRING_INFO, ERROR, LOADING, 
	NEW_LASTNAME, NEW_S_LASTNAME, NEW_NAME, NEW_AGE, ADDED, EDITED,DELETE_USER
} from '../Types/userTypes';

const INITIAL_STATE = {
	info: [],
	loading: false,
	error: '',
    lastName: '',
	s_lastName: '',
	name: '',
	age:''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {

		case BRING_INFO:
			return { ...state, info: action.payload, loading: false };

		case ERROR:
			return { ...state, error: action.payload, loading: false };

		case LOADING:
			return { ...state, loading: true };

		case NEW_LASTNAME:
			return { ...state, lastName: action.payload, loading: false };
		
		case NEW_S_LASTNAME:
			return { ...state, s_lastName: action.payload, loading: false };

		case NEW_NAME:
			return { ...state, name: action.payload, loading: false };
	
		case NEW_AGE:
			return { ...state, age: action.payload, loading: false };

		case ADDED:
			return { ...state, lastName: '', s_lastName: '', name:'', age:'', loading: false, info: [] };

		case EDITED:
			return { ...state, loading: false, info: [] };

		case DELETE_USER:
            return { ...state, loading: false,info: []  };
		default: return state;
	}
};