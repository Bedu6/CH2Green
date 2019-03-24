import axios from 'axios';
import {TRAER_USUARIOS, ERROR, CARGANDO, AGREGADO, EDITADO} from '../types/usuariosTypes';

export const traerComentarios = () => async (dispatch) => {
    dispatch ({ type: CARGANDO });

    try{
        const response = await axios.get('https://g6-ch2.herokuapp.com/api/usuarios/green');

        dispatch({
            type: TRAER_USUARIOS,
            payload: response.data 
        });
    }

    catch(error){
        dispatch({
            type:ERROR,
            payload: error.message
        });
    }
};