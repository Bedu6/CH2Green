import axios from 'axios';
import {
	BRING_DEP_INFO, ERROR_DEP_INFO, LOADING_DEPS, //NEW_DEPENDENCY,
    // NEW_DEP_NAME, NEW_DEP_AGE, DEP_ADDED, DEP_EDITED 
} from '../Types/dependentsTypes';

export const bringDeps = () => async (dispatch) => {
	dispatch({ type: LOADING_DEPS });

	try {
		const response = await axios.get(`https://g6-ch2.herokuapp.com/api/dependientes/green/`);
		
		dispatch({
			type: BRING_DEP_INFO,
			payload: response.data
		});
	}
	catch(error) {
		dispatch({
			type: ERROR_DEP_INFO,
			payload: error.message
		});
	}
};

// export const changeImput = (opt, txt) => (dispatch) => {
// 	dispatch({
// 		type: opt,
// 		payload: txt
// 	});
// };

// export const add = (info) => async (dispatch) => {
// 	dispatch({ type: LOADING_DEPS });

// 	try {
// 		await axios.post('https://g6-ch2.herokuapp.com/api/usuarios/green', info);
		
// 		window.Materialize.toast(
// 			'Depentent added',
// 			3000
// 		);

// 		dispatch({ type: DEP_ADDED });
// 	}
// 	catch (error) {
// 		window.Materialize.toast(
// 			'Something is wrong, try later',
// 			3000
// 		);
// 		dispatch({ type: ERROR_DEP_INFO });
// 	}
// };

// export const edit = (info, id) => async (dispatch) => {
// 	dispatch({ type: LOADING_DEPS });

// 	try {
// 		await axios.put(`https://g6-ch2.herokuapp.com/api/usuarios/green/${id}`, info);
		
// 		window.Materialize.toast(
// 			'¡Changes saved!',
// 			3000
// 		);

// 		dispatch({ type: DEP_EDITED });
// 	}
// 	catch (error) {
// 		window.Materialize.toast(
// 			'Something is wrong, try later',
// 			3000
// 		);
// 		dispatch({ type: ERROR_DEP_INFO });
// 	}
// };

// export const bringComment = (id) => async (dispatch) => {
// 	dispatch({ type: LOADING_DEPS });

// 	try {
// 		const response = await axios.get(`https://g6-ch2.herokuapp.com/api/usuarios/green/${id}`);

// 		console.log(response.data);
// 		dispatch({
// 			type: NEW_DEP_NAME,
// 			payload: response.data.nombre
// 		});
// 		dispatch({
// 			type: NEW_DEPENDENCY,
// 			payload: response.data.dependencia
// 		});
// 		dispatch({
// 			type: NEW_DEP_AGE,
// 			payload: response.data.edad
// 		});
// 	}
// 	catch(error) {
// 		dispatch({
// 			type: ERROR_DEP_INFO,
// 			payload: error.message
// 		});
// 	}

// };
	// export const drop = (info, id) => async (dispatch) => {
	// 	dispatch({ type: LOADING });
	
	// 	try {
	// 		await axios.delete(`https://g6-ch2.herokuapp.com/api/usuarios/green/${id}`, info);
			
	// 		window.alert();
	
	// 		dispatch({ type: EDITED });
	// 	}
	// 	catch (error) {
	// 		window.Materialize.toast(
	// 			'Something is wrong, try later',
	// 			3000
	// 		);
	// 		dispatch({ type: ERROR });
	// 	}
	// };