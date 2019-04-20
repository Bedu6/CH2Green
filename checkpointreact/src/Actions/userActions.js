import axios from 'axios';
import {
	BRING_INFO, ERROR, LOADING, ADDED, NEW_LASTNAME, NEW_S_LASTNAME, NEW_NAME, NEW_AGE, EDITED,DELETE_USER
} from '../Types/userTypes';

export const bringComments = () => async (dispatch) => {
	dispatch({ type: LOADING });

	try {
		const response = await axios.get('https://g6-ch2.herokuapp.com/api/usuarios/green');
		
		dispatch({
			type: BRING_INFO,
			payload: response.data
		});
	}
	catch(error) {
		dispatch({
			type: ERROR,
			payload: error.message
		});
	}
};

export const changeImput = (opt, txt) => (dispatch) => {
	dispatch({
		type: opt,
		payload: txt
	});
};

export const add = (info) => async (dispatch) => {
	dispatch({ type: LOADING });

	try {
		await axios.post('https://g6-ch2.herokuapp.com/api/usuarios/green', info);
		
		window.Materialize.toast(
			'User successfully added',
			3000
		);

		dispatch({ type: ADDED });
	}
	catch (error) {
		window.Materialize.toast(
			'Something is wrong, try later',
			3000
		);
		dispatch({ type: ERROR });
	}
};

export const edit = (info, id) => async (dispatch) => {
	dispatch({ type: LOADING });

	try {
		await axios.put(`https://g6-ch2.herokuapp.com/api/usuarios/green/${id}`, info);
		
		window.Materialize.toast(
			'¡Changes saved!',
			3000
		);

		dispatch({ type: EDITED });
	}
	catch (error) {
		window.Materialize.toast(
			'Something is wrong, try later',
			3000
		);
		dispatch({ type: ERROR });
	}
};

export const bringComment = (id) => async (dispatch) => {
	dispatch({ type: LOADING });

	try {
		const response = await axios.get(`https://g6-ch2.herokuapp.com/api/usuarios/green/${id}`);

		console.log(response.data);
		dispatch({
			type: NEW_LASTNAME,
			payload: response.data.apellidos.paterno
		});
		dispatch({
			type: NEW_S_LASTNAME,
			payload: response.data.apellidos.materno
		});
		dispatch({
			type: NEW_NAME,
			payload: response.data.nombre
		});
		dispatch({
			type: NEW_AGE,
			payload: response.data.edad
		});
	}
	catch(error) {
		dispatch({
			type: ERROR,
			payload: error.message
		});
	}

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
};

export const deleteUser = (id) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        await axios.delete(`https://g6-ch2.herokuapp.com/api/usuarios/green/${ id }`);

        window.Materialize.toast(
            'User deleted',
            3000            
        );

        dispatch({
            type: DELETE_USER
        });
    }
    catch (error) {
        window.Materialize.toast(
           'Error',
            3000
        );

        dispatch({
            type: ERROR
        });
    }
};